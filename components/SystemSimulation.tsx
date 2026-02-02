
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Float, Html, PerspectiveCamera, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Database, TrendingUp, Zap, ShieldCheck } from 'lucide-react';

// Map Three.js intrinsic elements to typed constants to bypass JSX errors
const Group = 'group' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const MeshBasicMaterial = 'meshBasicMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;

const NODE_SERVICES = [
  "Compute Unit v2",
  "Nginx Ingress",
  "Redis Cluster",
  "Kafka Stream",
  "Model API"
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
      const freq = isScaling ? 25 : 8;
      const blink = Math.sin(state.clock.elapsedTime * (freq + index)) > 0;
      lightRef.current.material.opacity = blink ? 1 : 0.2;
    }
  });

  return (
    <Group 
      position={position}
      onPointerOver={(e: any) => { e.stopPropagation(); setHovered(true); onHover(index); }}
      onPointerOut={() => { setHovered(false); onHover(null); }}
    >
      {/* Blade Chassis */}
      <Box args={[3.8, 0.4, 3.8]}>
        <MeshStandardMaterial 
          color={hovered ? "#312e81" : "#111827"} 
          roughness={0.05} 
          metalness={0.9}
          emissive={isScaling ? "#6366f1" : hovered ? "#1e1b4b" : "#000000"}
          emissiveIntensity={isScaling ? 2 : hovered ? 0.8 : 0}
        />
      </Box>

      {/* Front Face Accents */}
      <Box args={[3.85, 0.2, 0.1]} position={[0, 0, 1.9]}>
        <MeshStandardMaterial color="#1f2937" metalness={1} />
      </Box>

      {/* Status LED */}
      <Sphere ref={lightRef} args={[0.07, 16, 16]} position={[-1.6, 0, 1.98]}>
        <MeshBasicMaterial color={cpuLoad > 0.8 ? "#ff3333" : "#00ff88"} transparent />
      </Sphere>
    </Group>
  );
};

const ServerRack = ({ cpuLoad, isScaling }: { cpuLoad: number, isScaling: boolean }) => {
  const rackRef = useRef<THREE.Group>(null!);
  const [activeService, setActiveService] = useState<number | null>(null);
  // Fix: Type casting to avoid motion prop errors
  const MotionDiv = motion.div as any;

  useFrame(() => {
    if (rackRef.current) rackRef.current.rotation.y += 0.003;
  });

  return (
    <Group ref={rackRef}>
      {/* Structural Frame */}
      <Box args={[0.2, 7.5, 0.2]} position={[2, 0, 2]}><MeshStandardMaterial color="#0a0a0a" metalness={1} /></Box>
      <Box args={[0.2, 7.5, 0.2]} position={[-2, 0, 2]}><MeshStandardMaterial color="#0a0a0a" metalness={1} /></Box>
      <Box args={[0.2, 7.5, 0.2]} position={[2, 0, -2]}><MeshStandardMaterial color="#0a0a0a" metalness={1} /></Box>
      <Box args={[0.2, 7.5, 0.2]} position={[-2, 0, -2]}><MeshStandardMaterial color="#0a0a0a" metalness={1} /></Box>

      {/* Blades */}
      {[...Array(10)].map((_, i) => (
        <ServerBlade 
          key={i} 
          index={i}
          position={[0, -2.8 + i * 0.65, 0]} 
          cpuLoad={cpuLoad} 
          isScaling={isScaling}
          onHover={setActiveService}
        />
      ))}

      {activeService !== null && (
        <Html position={[0, activeService * 0.65 - 2.8, 2.5]} center>
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900/95 text-white p-4 rounded-2xl border border-primary-500/30 shadow-2xl backdrop-blur-xl pointer-events-none min-w-[180px]"
          >
            <div className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1">NODE: {activeService + 1}</div>
            <div className="font-bold flex items-center gap-2">
              <Zap size={14} className="text-amber-400" />
              {NODE_SERVICES[activeService % NODE_SERVICES.length]}
            </div>
          </MotionDiv>
        </Html>
      )}
    </Group>
  );
};

const SystemSimulation: React.FC = () => {
  const [metrics, setMetrics] = useState({ cpu: 45, ram: 62 });
  const [isScaling, setIsScaling] = useState(false);
  // Fix: Type casting to avoid motion prop errors
  const MotionDiv = motion.div as any;

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => {
        const nextCpu = Math.max(20, Math.min(95, prev.cpu + (Math.random() - 0.5) * 15));
        if (nextCpu > 85 && !isScaling) {
          setIsScaling(true);
          setTimeout(() => setIsScaling(false), 5000);
        }
        return { cpu: nextCpu, ram: Math.max(30, Math.min(90, prev.ram + (Math.random() - 0.5) * 5)) };
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isScaling]);

  return (
    <section id="infrastructure" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Main Visualization Container */}
          <div className="w-full lg:w-3/5 h-[600px] bg-slate-950 rounded-[3rem] border border-slate-800 relative overflow-hidden shadow-2xl">
            {/* HUD Overlays */}
            <div className="absolute top-8 left-8 z-20 space-y-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/80 backdrop-blur-xl rounded-full border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-200">CLUSTER: CORE-REGION-1</span>
              </div>
              <AnimatePresence>
                {isScaling && (
                  <MotionDiv 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-3 px-4 py-2 bg-primary-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg"
                  >
                    <TrendingUp size={12} /> HPA: SCALING UP
                  </MotionDiv>
                )}
              </AnimatePresence>
            </div>

            <div className="absolute top-8 right-8 z-20 space-y-3">
              <MetricBadge icon={<Cpu size={14} />} label="CPU" value={`${metrics.cpu.toFixed(1)}%`} active={metrics.cpu > 80} />
              <MetricBadge icon={<Database size={14} />} label="RAM" value={`${metrics.ram.toFixed(1)}%`} active={metrics.ram > 80} />
            </div>

            <Canvas shadows dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[12, 10, 12]} fov={35} />
              <AmbientLight intensity={0.8} />
              <PointLight position={[10, 10, 10]} intensity={2} color="#6366f1" />
              <PresentationControls global snap rotation={[0, -Math.PI / 4, 0]}>
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                  <ServerRack cpuLoad={metrics.cpu / 100} isScaling={isScaling} />
                </Float>
              </PresentationControls>
              <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.4} far={10} color="#000000" position={[0, -3.9, 0]} />
              <Environment preset="night" />
            </Canvas>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
              <span className="px-6 py-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                Drag to Rotate • Hover Nodes for Audit
              </span>
            </div>
          </div>

          <div className="w-full lg:w-2/5 space-y-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-1 w-12 bg-primary-600 rounded-full" />
              <span className="text-primary-600 font-black text-xs uppercase tracking-[0.5em]">Scalability</span>
            </div>
            <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white leading-tight">3D Cluster Observability</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
              Enterprise-grade architectural simulation featuring <strong>Horizontal Pod Autoscaling (HPA)</strong> and automated failover orchestration.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                <ShieldCheck className="text-primary-600 mb-4" />
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Health</div>
                <div className="text-2xl font-bold dark:text-white">99.9%</div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                <Zap className="text-amber-500 mb-4" />
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Latency</div>
                <div className="text-2xl font-bold dark:text-white">14ms</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const MetricBadge = ({ icon, label, value, active }: { icon: any, label: string, value: string, active: boolean }) => (
  <div className={`flex items-center gap-3 px-4 py-2 bg-slate-900/90 backdrop-blur-xl rounded-2xl border ${active ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]' : 'border-slate-800'}`}>
    <div className={active ? 'text-red-500' : 'text-primary-400'}>{icon}</div>
    <div className="flex flex-col">
      <span className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">{label}</span>
      <span className={`text-xs font-mono font-bold ${active ? 'text-red-500' : 'text-white'}`}>{value}</span>
    </div>
  </div>
);

export default SystemSimulation;
