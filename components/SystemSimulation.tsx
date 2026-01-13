
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Float, Html, PerspectiveCamera, Environment, ContactShadows, PresentationControls, Text } from '@react-three/drei';
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
  const chassisRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (lightRef.current) {
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
      {/* Blade Chassis - Improved Visibility with blueish tint */}
      <Box args={[3.8, 0.45, 3.8]} ref={chassisRef}>
        <meshStandardMaterial 
          color={hovered ? "#312e81" : "#1e293b"} 
          roughness={0.1} 
          metalness={0.8}
          emissive={isScaling && index >= 6 ? "#6366f1" : hovered ? "#1e1b4b" : "#0f172a"}
          emissiveIntensity={isScaling ? 4 : hovered ? 1.5 : 0.2}
        />
      </Box>

      {/* Front Face Accents */}
      <Box args={[3.85, 0.25, 0.15]} position={[0, 0, 1.9]}>
        <meshStandardMaterial color="#334155" metalness={1} roughness={0.1} />
      </Box>

      {/* Status LED - Brighter and larger */}
      <Sphere ref={lightRef} args={[0.08, 16, 16]} position={[-1.6, 0, 1.98]}>
        <meshBasicMaterial 
          color={cpuLoad > 0.8 ? "#ff0000" : "#00ffcc"} 
          transparent 
          toneMapped={false}
        />
      </Sphere>

      {/* Activity LED */}
      <Sphere args={[0.06, 8, 8]} position={[-1.3, 0, 1.98]}>
        <meshBasicMaterial color="#00d4ff" opacity={0.9} transparent toneMapped={false} />
      </Sphere>
    </group>
  );
};

const ServerRack = ({ cpuLoad, isScaling }: { cpuLoad: number, isScaling: boolean }) => {
  const rackRef = useRef<THREE.Group>(null!);
  const [activeService, setActiveService] = useState<number | null>(null);

  useFrame((state) => {
    if (rackRef.current) {
      rackRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={rackRef}>
      {/* Rack Frame Structural Pillars - Made thicker for visibility */}
      <Box args={[0.25, 8, 0.25]} position={[2, 0, 2]}><meshStandardMaterial color="#0f172a" metalness={1} roughness={0.1} /></Box>
      <Box args={[0.25, 8, 0.25]} position={[-2, 0, 2]}><meshStandardMaterial color="#0f172a" metalness={1} roughness={0.1} /></Box>
      <Box args={[0.25, 8, 0.25]} position={[2, 0, -2]}><meshStandardMaterial color="#0f172a" metalness={1} roughness={0.1} /></Box>
      <Box args={[0.25, 8, 0.25]} position={[-2, 0, -2]}><meshStandardMaterial color="#0f172a" metalness={1} roughness={0.1} /></Box>

      {/* Server Blades */}
      {[...Array(10)].map((_, i) => (
        <ServerBlade 
          key={i} 
          index={i}
          position={[0, -3 + i * 0.68, 0]} 
          cpuLoad={cpuLoad} 
          isScaling={isScaling}
          onHover={(idx: number | null) => setActiveService(idx)}
        />
      ))}

      {/* Dynamic Service Info HUD */}
      {activeService !== null && (
        <Html 
          position={[0, activeService * 0.68 - 3, 2.8]} 
          center 
          distanceFactor={8}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="bg-slate-900/95 text-white p-5 rounded-3xl border border-primary-500/50 shadow-[0_0_50px_rgba(99,102,241,0.5)] backdrop-blur-xl pointer-events-none min-w-[260px] select-none"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400">NODE STATUS: ACTIVE</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
            </div>
            <h4 className="text-base font-bold mb-4 flex items-center gap-2">
              <Zap size={14} className="text-amber-400" />
              {NODE_SERVICES[activeService % NODE_SERVICES.length]}
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-black text-slate-400">
                <span>COMPUTE UTILIZATION</span>
                <span className={cpuLoad > 0.8 ? "text-red-400" : "text-primary-400"}>{(Math.random() * 5 + (cpuLoad * 100)).toFixed(1)}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-[1px] border border-slate-700">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${cpuLoad > 0.8 ? "bg-red-500 shadow-[0_0_10px_#ef4444]" : "bg-primary-500 shadow-[0_0_10px_#6366f1]"}`} 
                  style={{ width: `${Math.min(100, (cpuLoad * 100) + (Math.random() * 10))}%` }} 
                />
              </div>
            </div>
          </motion.div>
        </Html>
      )}

      {/* Top and Bottom Plates */}
      <Box args={[5, 0.3, 5]} position={[0, -4, 0]}>
        <meshStandardMaterial color="#020617" metalness={1} roughness={0.05} />
      </Box>
      <Box args={[5, 0.3, 5]} position={[0, 4, 0]}>
        <meshStandardMaterial color="#020617" metalness={1} roughness={0.05} />
      </Box>
    </group>
  );
};

const InfrastructureScene = ({ metrics, isScaling }: { metrics: any, isScaling: boolean }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[18, 15, 18]} fov={25} />
      
      {/* Enhanced Lighting Rig */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 20, 10]} intensity={2.5} color="#ffffff" castShadow />
      <pointLight position={[15, 10, 15]} intensity={5} color="#4f46e5" />
      <pointLight position={[-15, 10, -15]} intensity={3} color="#1e1b4b" />
      <spotLight position={[0, 25, 0]} angle={0.5} penumbra={1} intensity={10} color="#ffffff" />
      
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, -Math.PI / 4, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.5, Math.PI / 1.5]}
      >
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <ServerRack cpuLoad={metrics.cpu / 100} isScaling={isScaling} />
        </Float>
      </PresentationControls>

      <ContactShadows 
        resolution={1024} 
        scale={40} 
        blur={2} 
        opacity={0.6} 
        far={20} 
        color="#000000" 
        position={[0, -4.1, 0]}
      />
      
      {/* Scene Environment */}
      <Environment preset="city" />
      
      {/* Floor Visualization */}
      <gridHelper args={[60, 40, "#312e81", "#020617"]} position={[0, -4.1, 0]} opacity={0.3} transparent />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4.12, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#020617" roughness={0.1} metalness={0.9} />
      </mesh>
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
        const nextCpu = Math.max(20, Math.min(99, prev.cpu + (Math.random() - 0.5) * 20));
        
        if (nextCpu > 88 && !isScaling) {
          setIsScaling(true);
          setTimeout(() => setIsScaling(false), 7000);
        }

        return {
          cpu: nextCpu,
          ram: Math.max(40, Math.min(95, prev.ram + (Math.random() - 0.5) * 8)),
          disk: Math.max(10, Math.min(85, prev.disk + (Math.random() - 0.5) * 5)),
          network: Math.max(80, Math.min(1800, prev.network + (Math.random() - 0.5) * 400))
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
          
          {/* 3D Visualization Area - High Visibility Fix */}
          <div className="w-full lg:w-[65%] h-[750px] bg-[#020617] rounded-[4rem] border border-slate-800 relative overflow-hidden shadow-[0_0_150px_rgba(0,0,0,0.6)] cursor-move ring-2 ring-slate-800/50">
            {/* HUD Overlays */}
            <div className="absolute top-10 left-10 z-20 space-y-4">
              <div className="flex items-center gap-4 px-6 py-3 bg-slate-900/90 backdrop-blur-3xl rounded-[2rem] border border-primary-500/20 shadow-2xl">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_12px_#22c55e]" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-100">ENGINE: VULKAN-GRID-B</span>
              </div>
              <AnimatePresence>
                {isScaling && (
                  <motion.div 
                    initial={{ opacity: 0, x: -50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.8 }}
                    className="flex items-center gap-4 px-6 py-3 bg-primary-600 text-white rounded-[2rem] shadow-[0_0_50px_rgba(99,102,241,0.7)] border border-primary-400/50"
                  >
                    <TrendingUp size={16} className="animate-bounce" />
                    <span className="text-xs font-black uppercase tracking-[0.2em]">HPA: AUTOSCALING INSTANCE</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="absolute top-10 right-10 z-20 flex flex-col gap-6">
               <MetricBadge icon={<Cpu size={20} />} label="GRID LOAD" value={`${metrics.cpu.toFixed(1)}%`} active={metrics.cpu > 80} />
               <MetricBadge icon={<Database size={20} />} label="MEM ALLOC" value={`${metrics.ram.toFixed(1)}%`} active={metrics.ram > 80} />
            </div>

            {/* Main Canvas Component */}
            <div className="w-full h-full">
              <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, stencil: false, depth: true }} onCreated={({ gl }) => { gl.setClearColor(new THREE.Color('#020617')) }}>
                <InfrastructureScene metrics={metrics} isScaling={isScaling} />
              </Canvas>
            </div>

            <div className="absolute bottom-10 left-10 z-20">
               <div className="px-6 py-3 bg-slate-950/90 backdrop-blur-3xl rounded-full text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] border border-primary-900/30 shadow-2xl">
                 Live Telemetry Stream • Drag to Pivot View
               </div>
            </div>
            
            {/* Visual Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] opacity-20" />
          </div>

          {/* Telemetry Control Dashboard */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[4px] w-16 bg-primary-600 rounded-full" />
                <span className="text-primary-600 font-black text-xs uppercase tracking-[0.6em]">Core Cluster</span>
              </div>
              <h2 className="text-5xl font-heading font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">3D Cluster Observability</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                Live architectural simulation of an enterprise MLOps ecosystem. Integrated <strong>Horizontal Pod Autoscaling (HPA)</strong> and automated failover orchestration for zero-downtime reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <StatCard title="IO Throughput" value={`${metrics.network.toFixed(0)} MB/s`} trend="+38.2%" icon={<Globe size={22} />} />
              <StatCard title="Healthy Nodes" value={isScaling ? "14/14" : "10/14"} trend={isScaling ? "SCALING" : "OPTIMAL"} icon={<Server size={22} />} />
            </div>

            <div className="p-8 bg-slate-50 dark:bg-slate-900/60 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-inner relative group overflow-hidden">
              <div className="flex justify-between items-center mb-8 relative z-10">
                 <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] flex items-center gap-3">
                   <Activity size={14} className="text-primary-600" /> Infrastructure Pulse
                 </h4>
                 <div className="flex items-center gap-3">
                    {isScaling && <Zap size={14} className="text-amber-500 fill-amber-500 animate-pulse" />}
                    <span className="text-[10px] font-mono text-slate-400 font-black uppercase tracking-widest">Real-time stats</span>
                 </div>
              </div>
              <div className="h-48 w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={history}>
                    <defs>
                      <linearGradient id="colorCpuFix" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area 
                      type="monotone" 
                      dataKey="cpu" 
                      stroke="#6366f1" 
                      strokeWidth={6} 
                      fillOpacity={1} 
                      fill="url(#colorCpuFix)" 
                      animationDuration={800}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 blur-3xl rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const MetricBadge = ({ icon, label, value, active }: { icon: any, label: string, value: string, active: boolean }) => (
  <motion.div 
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    className={`flex items-center gap-5 px-6 py-5 bg-slate-950/95 backdrop-blur-3xl rounded-[2.5rem] border ${active ? 'border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.5)]' : 'border-slate-800'} shadow-2xl transition-all duration-500 group select-none ring-1 ring-slate-800/50`}
  >
    <div className={`p-4 rounded-2xl bg-slate-900 shadow-inner transition-all duration-500 ${active ? 'text-red-500 scale-110 shadow-[0_0_15px_#ef4444]' : 'text-primary-400 group-hover:text-primary-200 shadow-[0_0_15px_#6366f122]'}`}>{icon}</div>
    <div className="flex flex-col">
      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1.5">{label}</span>
      <span className={`text-2xl font-mono font-bold tracking-tighter ${active ? 'text-red-500' : 'text-white'}`}>{value}</span>
    </div>
  </motion.div>
);

const StatCard = ({ title, value, trend, icon }: { title: string, value: string, trend: string, icon: any }) => (
  <div className="p-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:border-primary-500/60 transition-all hover:shadow-[0_30px_100px_-20px_rgba(99,102,241,0.3)] group relative overflow-hidden">
    <div className="p-5 bg-primary-50 dark:bg-primary-900/40 text-primary-600 rounded-[1.5rem] w-fit mb-8 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 relative z-10 shadow-inner">
      {icon}
    </div>
    <div className="flex flex-col relative z-10">
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">{title}</span>
      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-bold text-slate-900 dark:text-white leading-none tracking-tighter">{value}</span>
        <span className={`text-[10px] font-black uppercase tracking-widest ${trend === 'SCALING' ? 'text-amber-500' : 'text-green-500'}`}>{trend}</span>
      </div>
    </div>
    {/* Animated Corner Accent */}
    <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-primary-600/5 rounded-full group-hover:scale-[10] transition-transform duration-1000" />
  </div>
);

export default SystemSimulation;
