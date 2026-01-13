
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Float, Html, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
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

// Define interface for ServerBlade props to fix key property error and ensure type safety
interface ServerBladeProps {
  position: [number, number, number];
  index: number;
  cpuLoad: number;
  isScaling: boolean;
  onHover: (idx: number | null) => void;
}

const ServerBlade = ({ position, index, cpuLoad, isScaling, onHover }: ServerBladeProps) => {
  const [hovered, setHovered] = useState(false);
  const lightRef = useRef<THREE.Mesh>(null!);
  
  // Random blinking logic
  useFrame((state) => {
    if (lightRef.current) {
      const blink = Math.sin(state.clock.elapsedTime * (10 + index * 2)) > 0.5;
      lightRef.current.material.opacity = blink ? 0.8 : 0.2;
    }
  });

  return (
    <group 
      position={position}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); onHover(index); }}
      onPointerOut={() => { setHovered(false); onHover(null); }}
    >
      {/* Blade Chassis */}
      <Box args={[3.8, 0.4, 3.8]}>
        <meshStandardMaterial 
          color={hovered ? "#312e81" : "#111827"} 
          roughness={0.1} 
          metalness={0.8}
          emissive={isScaling && index >= 3 ? "#4f46e5" : "black"}
          emissiveIntensity={isScaling ? 0.4 : 0}
        />
      </Box>

      {/* Front Face Accents */}
      <Box args={[3.85, 0.2, 0.1]} position={[0, 0, 1.9]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>

      {/* Blinking Status LED */}
      <Sphere ref={lightRef} args={[0.04, 16, 16]} position={[-1.6, 0, 1.95]}>
        <meshBasicMaterial 
          color={cpuLoad > 0.8 ? "#ef4444" : "#10b981"} 
          transparent 
          toneMapped={false}
        />
      </Sphere>

      {/* Blue "Active" LED */}
      <Sphere args={[0.03, 8, 8]} position={[-1.4, 0, 1.95]}>
        <meshBasicMaterial color="#3b82f6" opacity={0.6} transparent />
      </Sphere>
    </group>
  );
};

const ServerRack = ({ cpuLoad, isScaling }: { cpuLoad: number, isScaling: boolean }) => {
  const rackRef = useRef<THREE.Group>(null!);
  const [activeService, setActiveService] = useState<number | null>(null);

  useFrame((state) => {
    // Continuous slow rotation
    rackRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={rackRef}>
      {/* Rack Frame Pillars */}
      <Box args={[0.1, 6.5, 0.1]} position={[2, 0, 2]}><meshStandardMaterial color="#1f2937" /></Box>
      <Box args={[0.1, 6.5, 0.1]} position={[-2, 0, 2]}><meshStandardMaterial color="#1f2937" /></Box>
      <Box args={[0.1, 6.5, 0.1]} position={[2, 0, -2]}><meshStandardMaterial color="#1f2937" /></Box>
      <Box args={[0.1, 6.5, 0.1]} position={[-2, 0, -2]}><meshStandardMaterial color="#1f2937" /></Box>

      {/* Server Blades */}
      {[...Array(10)].map((_, i) => (
        <ServerBlade 
          key={i} 
          index={i}
          position={[0, -2.5 + i * 0.55, 0]} 
          cpuLoad={cpuLoad} 
          isScaling={isScaling}
          onHover={(idx: number | null) => setActiveService(idx)}
        />
      ))}

      {/* Service Info HUD */}
      {activeService !== null && (
        <Html position={[0, activeService * 0.55 - 2.5, 2.5]} center distanceFactor={10}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-slate-900/95 text-white p-4 rounded-2xl border border-primary-500 shadow-2xl backdrop-blur-md pointer-events-none min-w-[200px]"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">Node BL-0{activeService + 1}</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <h4 className="text-sm font-bold mb-3">{NODE_SERVICES[activeService % NODE_SERVICES.length]}</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-[9px] font-bold text-slate-400">
                <span>CPU UTILIZATION</span>
                <span>{(Math.random() * 20 + 40).toFixed(1)}%</span>
              </div>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500" style={{ width: '60%' }} />
              </div>
            </div>
          </motion.div>
        </Html>
      )}

      {/* Bottom Base */}
      <Box args={[4.5, 0.2, 4.5]} position={[0, -3.2, 0]}>
        <meshStandardMaterial color="#111827" />
      </Box>
    </group>
  );
};

const InfrastructureScene = ({ metrics, isScaling }: { metrics: any, isScaling: boolean }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[10, 8, 12]} fov={35} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#4f46e5" />
      <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={2} color="#818cf8" castShadow />
      
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <ServerRack cpuLoad={metrics.cpu / 100} isScaling={isScaling} />
      </Float>

      <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.25} far={10} color="#000000" />
      <Environment preset="night" />
      
      <gridHelper args={[30, 30, "#312e81", "#1e293b"]} position={[0, -3.4, 0]} opacity={0.2} transparent />
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
        const nextCpu = Math.max(20, Math.min(95, prev.cpu + (Math.random() - 0.5) * 20));
        
        if (nextCpu > 80) {
          setIsScaling(true);
          setTimeout(() => setIsScaling(false), 4000);
        }

        return {
          cpu: nextCpu,
          ram: Math.max(40, Math.min(85, prev.ram + (Math.random() - 0.5) * 5)),
          disk: Math.max(10, Math.min(60, prev.disk + (Math.random() - 0.5) * 2)),
          network: Math.max(50, Math.min(950, prev.network + (Math.random() - 0.5) * 150))
        };
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setHistory(prev => {
      const newHistory = [...prev, { ...metrics, time: new Date().toLocaleTimeString() }].slice(-25);
      return newHistory;
    });
  }, [metrics]);

  return (
    <section id="infrastructure" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* 3D Visualization Area */}
          <div className="w-full lg:w-3/5 h-[600px] bg-slate-900 rounded-[3rem] border border-slate-800 relative overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing">
            <div className="absolute top-8 left-8 z-20 space-y-3">
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Region: AWS-US-EAST-1</span>
              </div>
              <AnimatePresence>
                {isScaling && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-3 px-4 py-2 bg-indigo-600 text-white rounded-2xl shadow-lg border border-indigo-400/30"
                  >
                    <TrendingUp size={14} className="animate-bounce" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Scaling Event: Adding Pods</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Canvas shadows>
              <InfrastructureScene metrics={metrics} isScaling={isScaling} />
            </Canvas>

            <div className="absolute bottom-8 left-8 z-20">
               <div className="p-3 bg-slate-950/60 backdrop-blur-sm rounded-xl text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] border border-slate-800">
                 Interactive 3D Simulation • Click & Drag
               </div>
            </div>

            <div className="absolute top-8 right-8 z-20 flex flex-col gap-4">
               <MetricBadge icon={<Cpu size={14} />} label="CLUSTER LOAD" value={`${metrics.cpu.toFixed(1)}%`} active={metrics.cpu > 80} />
               <MetricBadge icon={<Database size={14} />} label="RAM UTIL" value={`${metrics.ram.toFixed(1)}%`} active={metrics.ram > 80} />
            </div>
          </div>

          {/* Telemetry Dashboard */}
          <div className="w-full lg:w-2/5 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-primary-600" />
                <span className="text-primary-600 font-black text-xs uppercase tracking-[0.4em]">Infrastructure Unit</span>
              </div>
              <h2 className="text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6 leading-tight">3D Cluster Observability</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
                Live visualization of an enterprise MLOps cluster. The system features <strong>Horizontal Pod Autoscaling (HPA)</strong> and automated failover orchestration.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatCard title="Traffic Volume" value={`${metrics.network.toFixed(0)} MB/s`} trend="+18.2%" icon={<Globe size={20} />} />
              <StatCard title="Healthy Pods" value={isScaling ? "12/12" : "8/12"} trend={isScaling ? "MAX CAP" : "READY"} icon={<Server size={20} />} />
            </div>

            <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-inner">
              <div className="flex justify-between items-center mb-6">
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-2">
                   <Activity size={12} className="text-primary-600" /> Real-time Telemetry
                 </h4>
                 <div className="flex items-center gap-2">
                    {isScaling && <Zap size={12} className="text-amber-500 fill-amber-500 animate-pulse" />}
                    <span className="text-[10px] font-mono text-slate-500">POLLING: 2.5S</span>
                 </div>
              </div>
              <div className="h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={history}>
                    <defs>
                      <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="step" dataKey="cpu" stroke="#6366f1" fillOpacity={1} fill="url(#colorCpu)" strokeWidth={3} />
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
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    className={`flex items-center gap-4 px-5 py-3 bg-slate-950/90 backdrop-blur-xl rounded-2xl border ${active ? 'border-red-500/50 shadow-red-500/10' : 'border-slate-800'} shadow-2xl transition-all duration-500`}
  >
    <div className={`p-2 rounded-xl bg-slate-900 ${active ? 'text-red-500' : 'text-primary-400'}`}>{icon}</div>
    <div className="flex flex-col">
      <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
      <span className={`text-sm font-mono font-bold ${active ? 'text-red-500' : 'text-white'}`}>{value}</span>
    </div>
  </motion.div>
);

const StatCard = ({ title, value, trend, icon }: { title: string, value: string, trend: string, icon: any }) => (
  <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-primary-500/30 transition-all hover:shadow-xl">
    <div className="p-3 bg-primary-50 dark:bg-primary-900/30 text-primary-600 rounded-2xl w-fit mb-6">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">{title}</span>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-slate-900 dark:text-white leading-none">{value}</span>
        <span className={`text-[10px] font-bold ${trend === 'MAX CAP' ? 'text-red-500' : 'text-green-500'}`}>{trend}</span>
      </div>
    </div>
  </div>
);

export default SystemSimulation;
