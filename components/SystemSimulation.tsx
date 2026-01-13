import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Box,
  Sphere,
  Float,
  Html,
  PerspectiveCamera,
  Environment,
  ContactShadows,
  PresentationControls,
} from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import {
  Cpu,
  Database,
  Activity,
  Globe,
  Server,
  TrendingUp,
  Zap,
} from "lucide-react";

/* ===================== CONSTANTS ===================== */

const NODE_SERVICES = [
  "Inference API v2.5-Preview",
  "Distributed Training Pod",
  "High-Performance Redis",
  "Monitoring & Observability",
  "API Gateway / Ingress",
];

/* ===================== SERVER BLADE ===================== */

interface ServerBladeProps {
  position: [number, number, number];
  index: number;
  cpuLoad: number;
  isScaling: boolean;
  onHover: (idx: number | null) => void;
}

const ServerBlade: React.FC<ServerBladeProps> = ({
  position,
  index,
  cpuLoad,
  isScaling,
  onHover,
}) => {
  const [hovered, setHovered] = useState(false);

  const lightRef = useRef<
    THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>
  >(null!);

  useFrame((state) => {
    if (!lightRef.current) return;

    const freq = isScaling ? 20 : 10;
    const blink =
      Math.sin(state.clock.elapsedTime * (freq + index * 2)) > 0;

    lightRef.current.material.opacity = blink ? 1 : 0.25;
  });

  return (
    <group
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        onHover(index);
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      <Box args={[3.8, 0.45, 3.8]}>
        <meshStandardMaterial
          color={hovered ? "#312e81" : "#0a0f1d"}
          roughness={0.05}
          metalness={0.9}
          emissive={
            isScaling && index >= 6
              ? "#4f46e5"
              : hovered
              ? "#1e1b4b"
              : "black"
          }
          emissiveIntensity={isScaling ? 2 : hovered ? 0.5 : 0}
        />
      </Box>

      <Box args={[3.85, 0.25, 0.15]} position={[0, 0, 1.9]}>
        <meshStandardMaterial
          color="#111827"
          metalness={1}
          roughness={0.1}
        />
      </Box>

      <Sphere ref={lightRef} args={[0.06, 16, 16]} position={[-1.6, 0, 1.98]}>
        <meshBasicMaterial
          color={cpuLoad > 0.8 ? "#ff0000" : "#00ff66"}
          transparent
          toneMapped={false}
        />
      </Sphere>

      <Sphere args={[0.04, 8, 8]} position={[-1.3, 0, 1.98]}>
        <meshBasicMaterial
          color="#0088ff"
          opacity={0.8}
          transparent
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};

/* ===================== SERVER RACK ===================== */

const ServerRack = ({
  cpuLoad,
  isScaling,
}: {
  cpuLoad: number;
  isScaling: boolean;
}) => {
  const rackRef = useRef<THREE.Group>(null!);
  const [activeService, setActiveService] = useState<number | null>(null);

  useFrame(() => {
    if (!rackRef.current) return;
    rackRef.current.rotation.y += 0.003;
  });

  return (
    <group ref={rackRef}>
      {[
        [2, 0, 2],
        [-2, 0, 2],
        [2, 0, -2],
        [-2, 0, -2],
      ].map((p, i) => (
        <Box key={i} args={[0.15, 7.2, 0.15]} position={p as any}>
          <meshStandardMaterial color="#111827" metalness={1} />
        </Box>
      ))}

      {[...Array(10)].map((_, i) => (
        <ServerBlade
          key={i}
          index={i}
          position={[0, -2.8 + i * 0.62, 0]}
          cpuLoad={cpuLoad}
          isScaling={isScaling}
          onHover={setActiveService}
        />
      ))}

      {activeService !== null && (
        <Html
          position={[0, activeService * 0.62 - 2.8, 2.8]}
          center
          distanceFactor={6}
          occlude={true}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="bg-slate-900/95 text-white p-5 rounded-3xl border border-primary-500/50 shadow-[0_0_50px_rgba(99,102,241,0.3)] backdrop-blur-xl pointer-events-none min-w-[240px]"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">
              NODE SD-0{activeService + 1}
            </span>
            <h4 className="mt-3 font-bold flex gap-2 items-center">
              <Zap size={14} className="text-amber-400" />
              {NODE_SERVICES[activeService % NODE_SERVICES.length]}
            </h4>
          </motion.div>
        </Html>
      )}

      <Box args={[4.4, 0.25, 4.4]} position={[0, -3.4, 0]}>
        <meshStandardMaterial color="#050810" metalness={1} />
      </Box>
      <Box args={[4.4, 0.25, 4.4]} position={[0, 3.4, 0]}>
        <meshStandardMaterial color="#050810" metalness={1} />
      </Box>
    </group>
  );
};

/* ===================== SCENE ===================== */

const InfrastructureScene = ({
  metrics,
  isScaling,
}: {
  metrics: any;
  isScaling: boolean;
}) => (
  <>
    <PerspectiveCamera makeDefault position={[12, 10, 12]} fov={30} />

    <ambientLight intensity={0.4} />
    <pointLight position={[10, 10, 10]} intensity={2.5} color="#4f46e5" />
    <pointLight position={[-10, 5, -10]} intensity={1.5} color="#1e1b4b" />
    <spotLight
      position={[0, 15, 0]}
      angle={0.3}
      penumbra={1}
      intensity={3}
      castShadow
    />

    <PresentationControls global>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        <ServerRack cpuLoad={metrics.cpu / 100} isScaling={isScaling} />
      </Float>
    </PresentationControls>

    <ContactShadows opacity={0.4} scale={25} blur={2.5} far={15} />
    <Environment preset="night" background={false} />

    {/* ✅ FIXED GRID (NO INVALID PROPS) */}
    <gridHelper args={[40, 40, "#312e81", "#0f172a"]} position={[0, -3.5, 0]} />
  </>
);

/* ===================== MAIN COMPONENT ===================== */

const SystemSimulation: React.FC = () => {
  const [metrics, setMetrics] = useState({
    cpu: 45,
    ram: 62,
    disk: 28,
    network: 124,
  });

  const [isScaling, setIsScaling] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setMetrics((prev) => {
        const cpu = Math.min(98, Math.max(20, prev.cpu + (Math.random() - 0.5) * 25));

        if (cpu > 82 && !isScaling) {
          setIsScaling(true);
          setTimeout(() => setIsScaling(false), 5000);
        }

        return { ...prev, cpu };
      });
    }, 2000);

    return () => clearInterval(id);
  }, [isScaling]);

  return (
    <div className="h-[700px] w-full bg-slate-950 rounded-[4rem] overflow-hidden">
      <Canvas shadows gl={{ antialias: true }}>
        <InfrastructureScene metrics={metrics} isScaling={isScaling} />
      </Canvas>
    </div>
  );
};

export default SystemSimulation;
