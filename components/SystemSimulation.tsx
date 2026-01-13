
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Float, Html, PerspectiveCamera, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Cpu, Database, Activity, Globe, Server, TrendingUp, Zap } from 'lucide-react';

const NODE_SERVICES = [
  "Inference API v2.5-Preview",
  "Distributed Training Pod",
  "High-Performance Redis",
  "Monitoring & Observability",
  "API Gateway / Ingress"
];

interface ServerBladeProps {
  position: [number, number, number];
  index: number;
  cpuLoad: number;
  isScaling: boolean;
  onHover: (idx: number | null) => void;
}

const ServerBlade: React.FC<ServerBladeProps> = ({ position, index, cpuLoad, isScaling, onHover }) => {
  const [hovered, setHovered] = useState(false);
  const lightRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (lightRef.current) {
      // High-frequency blinking during scaling or high load
      const freq = isScaling ? 25 : 8;
      const blink = Math.sin(state.clock.elapsedTime * (freq + index * 1.5)) > 0;
      lightRef.current.material.opacity = blink ? 1 : 0.2;
    }
  });

  return (
    <group 
      position={position}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); onHover(index); }}
      onPointerOut={() => { setHovered(false); onHover(null); }}
    >
      {/* Blade Chassis */}
      <Box args={[3.8, 0.45, 3.8]}>
        <meshStandardMaterial 
          color={hovered ? "#312e81" : "#111827"} 
          roughness={0.05} 
          metalness={0.9}
          emissive={isScaling && index >= 6 ? "#6366f1" : hovered ? "#1e1b4b" : "#000000"}
          emissiveIntensity={isScaling ? 3 : hovered ? 0.8 : 0}
        />
      </Box>

      {/* Front Face Accents */}
      <Box args={[3.85, 0.25, 0.15]} position={[0, 0, 1.9]}>
        <meshStandardMaterial color="#1f2937" metalness={1} roughness={0.1} />
      </Box>

      {/* Status LED */}
      <Sphere ref={lightRef} args={[0.07, 16, 16]} position={[-1.6, 0, 1.98]}>
        <meshBasicMaterial 
          color={cpuLoad > 0.8 ? "#ff3333" : "#00ff88"} 
          transparent 
          toneMapped={false}
        />
      </Sphere>

      {/* Activity LED */}
      <Sphere args={[0.05, 8, 8]} position={[-1.3, 0, 1.98]}>
        <meshBasicMaterial color="#00aaff" opacity={0.9} transparent toneMapped={false} />
      </Sphere>
    </group>
  );
};

const ServerRack = ({ cpuLoad, isScaling }: { cpuLoad: number, isScaling: boolean }) => {
  const rackRef = useRef<THREE.Group>(null!);
  const [activeService, setActiveService] = useState<number | null>(null);

  useFrame((state) => {
    if (rackRef.current) {
      // Gentle constant rotation for observability
      rackRef.current.rotation.y += 0.0035;
    }
  });

  return (
    <group ref={rackRef}>
      {/* Rack Frame Structural Pillars */}
      <Box args={[0.2, 7.5, 0.2]} position={[2, 0, 2]}><meshStandardMaterial color="#0a0a0a" metalness={1} /></Box>
      <Box args={[0.2, 7.5, 0.2]} position={[-2, 0, 2]}><meshStandardMaterial color="#0a0a0a" metalness={1} /></Box>
      <Box args={[0.2, 7.5, 0.2]} position={[2, 0, -2]}><meshStandardMaterial color="#0a0a0a" metalness={1} /></Box>
      <Box args={[0.2, 7.5, 0.2]} position={[-2, 0, -2]}><meshStandardMaterial color="#0a0a0a" metalness={1} /></Box>

      {/* Server Blades */}
      {[...Array(10)].map((_, i) => (
        <ServerBlade 
          key={i} 
          index={i}
          position={[0, -2.8 + i * 0.65, 0]} 
          cpuLoad={cpuLoad} 
          isScaling={isScaling}
          onHover={(idx: number | null) => setActiveService(idx)}
        />
      ))}

      {/* Dynamic Service Info HUD */}
      {activeService !== null && (
        <Html 
          position={[0, activeService * 0.65 - 2.8, 2.5]} 
          center 
          distanceFactor={6}
          occlude
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.7, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="bg-slate-900/95 text-white p-5 rounded-3xl border border-primary-500/50 shadow-[0_0_50px_rgba(99,102,241,0.4)] backdrop-blur-xl pointer-events-none min-w-[240px] select-none"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400">NODE ID: AI-SRV-{activeService + 1}</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>
            <h4 className="text-base font-bold mb-4 flex items-center gap-2">
              <Zap size={14} className="text-amber-400" />
              {NODE_SERVICES[activeService % NODE_SERVICES.length]}
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-black text-slate-400">
                <span>RESOURCES</span>
                <span className={cpuLoad > 0.8 ? "text-red-400" : "text-primary-400"}>{(Math.random() * 10 + (cpuLoad * 100)).toFixed(1)}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden p-[1px]">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ${cpuLoad > 0.8 ? "bg-red-500" : "bg-primary-500"}`} 
                  style={{ width: `${Math.min(100, (cpuLoad * 100) + (Math.random() * 8))}%` }} 
                />
              </div>
            </div>
          </motion.div>
        </Html>
      )}

      {/* Top and Bottom Plates */}
      <Box args={[4.6, 0.25, 4.6]} position={[0, -3.8, 0]}>
        <meshStandardMaterial color="#111" metalness={1} roughness={0.1} />
      </Box>
      <Box args={[4.6, 0.25, 4.6]} position={[0, 3.8, 0]}>
        <meshStandardMaterial color="#111" metalness={1} roughness={0.1} />
      </Box>
    </group>
  );
};

const InfrastructureScene = ({ metrics, isScaling }: { metrics: any, isScaling: boolean }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[14, 12, 14]} fov={30} />
      
      {/* High Intensity Scene Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[15, 15, 15]} intensity={3} color="#6366f1" />
      <pointLight position={[-15, 10, -15]} intensity={2} color="#1e1b4b" />
      <spotLight position={[0, 20, 0]} angle={0.4} penumbra={1} intensity={4} color="#ffffff" castShadow />
      <directionalLight position={[0, 10, 5]} intensity={1} color="#ffffff" />
      
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, -Math.PI / 4, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.5, Math.PI / 1.5]}
      >
        <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <ServerRack cpuLoad={metrics.cpu / 100} isScaling={isScaling} />
        </Float>
      </PresentationControls>

      <ContactShadows resolution={1024} scale={30} blur={2} opacity={0.5} far={20} color="#000000" />
      <Environment preset="night" />
      
      {/* Visual Floor Grid */}
      <gridHelper args={[50, 50, "#312e81", "#020617"]} position={[0, -3.9, 0]} opacity={0.4} transparent />
    </>
  );
};

const SystemSimulation: React.FC = () => {
  const [metrics, setMetrics] = useState({
    cpu: 45,
    ram: 62,
    disk: 28,
    network: 124
  });
  const [history, setHistory] = useState<any[]>([]);
  const [isScaling, setIsScaling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => {
        const nextCpu = Math.max(15, Math.min(99, prev.cpu + (Math.random() - 0.5) * 30));
        
        if (nextCpu > 85 && !isScaling) {
          setIsScaling(true);
          setTimeout(() => setIsScaling(false), 6000);
        }

        return {
          cpu: nextCpu,
          ram: Math.max(30, Math.min(95, prev.ram + (Math.random() - 0.5) * 10)),
          disk: Math.max(5, Math.min(80, prev.disk + (Math.random() - 0.5) * 4)),
          network: Math.max(50, Math.min(1500, prev.network + (Math.random() - 0.5) * 300))
        };
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isScaling]);

  useEffect(() => {
    setHistory(prev => {
      const newHistory = [...prev, { ...metrics, time: new Date().toLocaleTimeString() }].slice(-30);
      return newHistory;
    });
  }, [metrics]);

  return (
    <section id="infrastructure" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* 3D Visualization Area */}
          <div className="w-full lg:w-[65%] h-[750px] bg-slate-950 rounded-[4rem] border border-slate-800 relative overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.5)] cursor-move ring-1 ring-slate-800">
            {/* HUD Overlays */}
            <div className="absolute top-10 left-10 z-20 space-y-4">
              <div className="flex items-center gap-4 px-6 py-3 bg-slate-900/90 backdrop-blur-2xl rounded-[2rem] border border-slate-800/50 shadow-2xl">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-200">CLUSTER: SD-CORP-GRID</span>
              </div>
              <AnimatePresence>
                {isScaling && (
                  <motion.div 
                    initial={{ opacity: 0, x: -40, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -40, scale: 0.8 }}
                    className="flex items-center gap-4 px-6 py-3 bg-primary-600 text-white rounded-[2rem] shadow-[0_0_40px_rgba(99,102,241,0.6)] border border-primary-400/40"
                  >
                    <TrendingUp size={16} className="animate-bounce" />
                    <span className="text-xs font-black uppercase tracking-[0.2em]">HPA: EXECUTING SCALE UP</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="absolute top-10 right-10 z-20 flex flex-col gap-5">
               <MetricBadge icon={<Cpu size={18} />} label="GRID LOAD" value={`${metrics.cpu.toFixed(1)}%`} active={metrics.cpu > 80} />
               <MetricBadge icon={<Database size={18} />} label="MEM POOL" value={`${metrics.ram.toFixed(1)}%`} active={metrics.ram > 80} />
            </div>

            {/* Three.js Canvas */}
            <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: false }} style={{ background: '#020617' }}>
              <InfrastructureScene metrics={metrics} isScaling={isScaling} />
            </Canvas>

            <div className="absolute bottom-10 left-10 z-20">
               <div className="px-6 py-3 bg-slate-950/90 backdrop-blur-2xl rounded-full text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] border border-slate-800 shadow-2xl">
                 Live Neural-Stream Simulation • Drag to Inspect
               </div>
            </div>
            
            {/* Visual Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[length:100%_4px,3px_100%] opacity-30" />
          </div>

          {/* Telemetry Control Dashboard */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[3px] w-14 bg-primary-600" />
                <span className="text-primary-600 font-black text-xs uppercase tracking-[0.5em]">Orchestration Engine</span>
              </div>
              <h2 className="text-5xl font-heading font-bold text-slate-900 dark:text-white mb-8 leading-tight">3D Cluster Observability</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                Live architectural simulation of an enterprise MLOps ecosystem. Dynamic <strong>Horizontal Pod Autoscaling (HPA)</strong> and automated failover protocols ensure 99.99% mission-critical availability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatCard title="IO Throughput" value={`${metrics.network.toFixed(0)} MB/s`} trend="+31.4%" icon={<Globe size={20} />} />
              <StatCard title="Health Index" value={isScaling ? "12/12" : "8/12"} trend={isScaling ? "SCALING" : "NOMINAL"} icon={<Server size={20} />} />
            </div>

            <div className="p-8 bg-slate-50 dark:bg-slate-900/60 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-inner relative group overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                 <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] flex items-center gap-3">
                   <Activity size={14} className="text-primary-600" /> Compute Pulse
                 </h4>
                 <div className="flex items-center gap-3">
                    {isScaling && <Zap size={14} className="text-amber-500 fill-amber-500 animate-pulse" />}
                    <span className="text-[10px] font-mono text-slate-400 font-black uppercase tracking-widest">Live telemetry</span>
                 </div>
              </div>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={history}>
                    <defs>
                      <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area 
                      type="monotone" 
                      dataKey="cpu" 
                      stroke="#6366f1" 
                      strokeWidth={5} 
                      fillOpacity={1} 
                      fill="url(#colorCpu)" 
                      animationDuration={1000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const MetricBadge = ({ icon, label, value, active }: { icon: any, label: string, value: string, active: boolean }) => (
  <motion.div 
    initial={{ x: 40, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    className={`flex items-center gap-5 px-6 py-5 bg-slate-950/95 backdrop-blur-3xl rounded-[2.5rem] border ${active ? 'border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.4)]' : 'border-slate-800'} shadow-2xl transition-all duration-500 group select-none`}
  >
    <div className={`p-4 rounded-2xl bg-slate-900 shadow-inner transition-all duration-500 ${active ? 'text-red-500 scale-110' : 'text-primary-400 group-hover:text-primary-200'}`}>{icon}</div>
    <div className="flex flex-col">
      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1.5">{label}</span>
      <span className={`text-xl font-mono font-bold tracking-tighter ${active ? 'text-red-500' : 'text-white'}`}>{value}</span>
    </div>
  </motion.div>
);

const StatCard = ({ title, value, trend, icon }: { title: string, value: string, trend: string, icon: any }) => (
  <div className="p-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:border-primary-500/50 transition-all hover:shadow-[0_25px_80px_-20px_rgba(99,102,241,0.25)] group">
    <div className="p-4 bg-primary-50 dark:bg-primary-900/30 text-primary-600 rounded-[1.5rem] w-fit mb-8 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">{title}</span>
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-slate-900 dark:text-white leading-none tracking-tighter">{value}</span>
        <span className={`text-[10px] font-black uppercase tracking-widest ${trend === 'SCALING' ? 'text-amber-500' : 'text-green-500'}`}>{trend}</span>
      </div>
    </div>
  </div>
);

export default SystemSimulation;
