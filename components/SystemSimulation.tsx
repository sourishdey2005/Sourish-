
import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Text, Float, MeshDistortMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Cpu, Database, Activity, Globe, Server, TrendingUp, Zap } from 'lucide-react';

const NODE_SERVICES = [
  "Inference API v2.4",
  "Training Pipeline (PyTorch)",
  "Redis Cache Cluster",
  "Prometheus Metrics",
  "Ingress Load Balancer"
];

const ServerRack = ({ cpuLoad, isScaling }: { cpuLoad: number, isScaling: boolean }) => {
  const group = useRef<THREE.Group>(null!);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useFrame((state) => {
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <group ref={group}>
      {/* Rack Frame */}
      <Box args={[4, 6, 4]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0f172a" transparent opacity={0.1} wireframe />
      </Box>

      {/* Internal "Nodes" */}
      {[...Array(5)].map((_, i) => (
        <group 
          key={i} 
          position={[0, -2 + i * 1, 0]}
          onPointerOver={() => setHoveredNode(i)}
          onPointerOut={() => setHoveredNode(null)}
        >
          <Box args={[3.5, 0.8, 3.5]}>
            <meshStandardMaterial 
              color={hoveredNode === i ? "#312e81" : "#1e293b"} 
              emissive={isScaling && i >= 3 ? "#4f46e5" : "black"}
              emissiveIntensity={isScaling ? 0.5 : 0}
            />
          </Box>
          
          {/* Service Details on Hover */}
          {hoveredNode === i && (
            <Html position={[2, 0, 0]} center>
              <div className="bg-slate-900/90 text-white p-3 rounded-lg border border-primary-500 shadow-xl backdrop-blur-sm pointer-events-none whitespace-nowrap">
                <p className="text-[10px] font-black uppercase tracking-tighter text-primary-400 mb-1">Service Node {i + 1}</p>
                <p className="text-xs font-bold">{NODE_SERVICES[i]}</p>
                <div className="flex gap-2 mt-2">
                   <div className="h-1 w-8 bg-green-500/50 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500" style={{ width: '85%' }} />
                   </div>
                   <span className="text-[8px] opacity-60 italic">Healthy</span>
                </div>
              </div>
            </Html>
          )}

          {/* Status Lights */}
          <Sphere args={[0.05, 16, 16]} position={[-1.4, 0, 1.8]}>
            <meshBasicMaterial 
              color={cpuLoad > 0.75 ? "#ef4444" : "#22c55e"} 
              toneMapped={false}
            />
          </Sphere>
          <Sphere args={[0.05, 16, 16]} position={[-1.2, 0, 1.8]}>
            <meshBasicMaterial 
              color={isScaling ? "#818cf8" : "#3b82f6"} 
              opacity={isScaling ? 0.8 : 0.4} 
              transparent 
            />
          </Sphere>
          
          <DataPacket isVertical delay={i * 0.5} activeColor={isScaling ? "#818cf8" : "#6366f1"} />
        </group>
      ))}
    </group>
  );
};

const DataPacket = ({ isVertical = false, delay = 0, activeColor = "#6366f1" }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);

  useFrame((state) => {
    const time = (state.clock.elapsedTime + delay) % 2;
    if (time < 1.5) {
      setActive(true);
      if (isVertical) {
        mesh.current.position.y = -2.5 + (time / 1.5) * 5;
      } else {
        mesh.current.position.z = -5 + (time / 1.5) * 10;
      }
    } else {
      setActive(false);
    }
  });

  return (
    <Sphere ref={mesh} args={[0.03, 8, 8]} visible={active}>
      <meshBasicMaterial color={activeColor} transparent opacity={0.6} />
    </Sphere>
  );
};

const InfrastructureScene = ({ metrics, isScaling }: { metrics: any, isScaling: boolean }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4338ca" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <ServerRack cpuLoad={metrics.cpu / 100} isScaling={isScaling} />
      </Float>

      {/* Network Traffic Simulation */}
      {[...Array(isScaling ? 24 : 12)].map((_, i) => (
        <group key={i} rotation={[0, (i / (isScaling ? 24 : 12)) * Math.PI * 2, 0]}>
          <DataPacket delay={Math.random() * 2} activeColor={isScaling ? "#c7d2fe" : "#6366f1"} />
        </group>
      ))}
      
      <gridHelper args={[20, 20, 0x6366f1, 0x1e293b]} position={[0, -4, 0]} opacity={0.1} transparent />
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
        const nextCpu = Math.max(20, Math.min(95, prev.cpu + (Math.random() - 0.5) * 15));
        
        // Trigger scaling effect when CPU > 75
        if (nextCpu > 75) {
          setIsScaling(true);
          setTimeout(() => setIsScaling(false), 5000);
        }

        return {
          cpu: nextCpu,
          ram: Math.max(40, Math.min(85, prev.ram + (Math.random() - 0.5) * 5)),
          disk: Math.max(10, Math.min(60, prev.disk + (Math.random() - 0.5) * 2)),
          network: Math.max(50, Math.min(950, prev.network + (Math.random() - 0.5) * 100))
        };
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setHistory(prev => {
      const newHistory = [...prev, { ...metrics, time: new Date().toLocaleTimeString() }].slice(-20);
      return newHistory;
    });
  }, [metrics]);

  return (
    <section id="infrastructure" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* 3D Visualization Area */}
          <div className="w-full lg:w-3/5 h-[500px] bg-slate-50 dark:bg-slate-900/40 rounded-[3rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden shadow-inner cursor-crosshair">
            <div className="absolute top-8 left-8 z-20">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Node: SD-CLUSTER-MAIN</span>
                </div>
                <AnimatePresence>
                  {isScaling && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center gap-3 px-4 py-2 bg-indigo-600 text-white rounded-2xl shadow-lg"
                    >
                      <TrendingUp size={14} className="animate-bounce" />
                      <span className="text-[10px] font-black uppercase tracking-widest">HPA Triggered: Scaling Up...</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <Canvas camera={{ position: [8, 8, 8], fov: 40 }}>
              <InfrastructureScene metrics={metrics} isScaling={isScaling} />
            </Canvas>

            <div className="absolute top-8 right-8 z-20">
               <div className="p-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl text-[8px] font-black text-slate-400 uppercase tracking-widest">
                 Hover Nodes for Metadata
               </div>
            </div>

            {/* Floating Metric Tags */}
            <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-4">
               <MetricBadge icon={<Cpu size={14} />} label="VCPU" value={`${metrics.cpu.toFixed(1)}%`} active={metrics.cpu > 75} />
               <MetricBadge icon={<Database size={14} />} label="MEM" value={`${metrics.ram.toFixed(1)}%`} active={metrics.ram > 75} />
            </div>
          </div>

          {/* Telemetry Dashboard */}
          <div className="w-full lg:w-2/5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-primary-600" />
                <span className="text-primary-600 font-black text-xs uppercase tracking-[0.3em]">Cloud Operations</span>
              </div>
              <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6">Autonomous Infrastructure</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Simulation of high-availability MLOps pipelines. Featuring <strong>Horizontal Pod Autoscaling (HPA)</strong> that monitors load thresholds and dynamically allocates cloud resources.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard title="Network I/O" value={`${metrics.network.toFixed(0)} Mbps`} trend="+12.4%" icon={<Globe size={20} />} />
              <StatCard title="Service Nodes" value={isScaling ? "5/5" : "3/5"} trend={isScaling ? "MAX LOAD" : "OPTIMAL"} icon={<Server size={20} />} />
            </div>

            {/* Performance Graph Overlay */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
              <div className="flex justify-between items-center mb-4">
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                   <Activity size={12} className="text-primary-600" /> System Load History
                 </h4>
                 <div className="flex items-center gap-2">
                    {isScaling && <Zap size={10} className="text-amber-500 fill-amber-500 animate-pulse" />}
                    <span className="text-[10px] font-mono text-slate-400">INTERVAL: 2000MS</span>
                 </div>
              </div>
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={history}>
                    <defs>
                      <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="cpu" stroke="#6366f1" fillOpacity={1} fill="url(#colorCpu)" strokeWidth={2} />
                    <Area type="monotone" dataKey="ram" stroke="#818cf8" fill="transparent" strokeWidth={1} strokeDasharray="5 5" />
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
    className={`flex items-center gap-3 px-4 py-2 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md rounded-xl border ${active ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} shadow-xl transition-colors duration-500`}
  >
    <div className={`p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 ${active ? 'text-red-500' : 'text-primary-600'}`}>{icon}</div>
    <div className="flex flex-col">
      <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">{label}</span>
      <span className={`text-xs font-mono font-bold ${active ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>{value}</span>
    </div>
  </motion.div>
);

const StatCard = ({ title, value, trend, icon }: { title: string, value: string, trend: string, icon: any }) => (
  <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-primary-500/30 transition-all">
    <div className="p-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 rounded-lg w-fit mb-4">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{title}</span>
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold text-slate-900 dark:text-white">{value}</span>
        <span className={`text-[10px] font-bold ${trend === 'MAX LOAD' ? 'text-red-500' : trend.startsWith('+') ? 'text-green-500' : 'text-slate-400'}`}>{trend}</span>
      </div>
    </div>
  </div>
);

export default SystemSimulation;
