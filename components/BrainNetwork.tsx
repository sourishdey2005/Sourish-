
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

// Map Three.js intrinsic elements to typed constants to bypass JSX errors
const Group = 'group' as any;
const Mesh = 'mesh' as any;
const SphereGeometry = 'sphereGeometry' as any;
const MeshBasicMaterial = 'meshBasicMaterial' as any;
const AmbientLight = 'ambientLight' as any;

const NeuralNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const lineRef = useRef<THREE.Group>(null!);

  // Generate neurons (points)
  const [neurons, connections] = useMemo(() => {
    const n = 80;
    const positions = new Float32Array(n * 3);
    const connList: [THREE.Vector3, THREE.Vector3][] = [];
    const tempPositions: THREE.Vector3[] = [];

    for (let i = 0; i < n; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      positions.set([x, y, z], i * 3);
      tempPositions.push(new THREE.Vector3(x, y, z));
    }

    // Generate synapses (lines) between nearby neurons
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dist = tempPositions[i].distanceTo(tempPositions[j]);
        if (dist < 3.5) {
          connList.push([tempPositions[i], tempPositions[j]]);
        }
      }
    }

    return [positions, connList];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.02;
    lineRef.current.rotation.y = time * 0.05;
    lineRef.current.rotation.x = time * 0.02;

    // Pulse effect
    const pulse = Math.sin(time * 2) * 0.5 + 0.5;
    if (pointsRef.current.material instanceof THREE.PointsMaterial) {
       pointsRef.current.material.opacity = 0.3 + pulse * 0.7;
    }
  });

  return (
    <Group>
      <Points ref={pointsRef} positions={neurons} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <Group ref={lineRef}>
        {connections.slice(0, 100).map((conn, i) => (
          <Line
            key={i}
            points={[conn[0], conn[1]]}
            color="#6366f1"
            lineWidth={0.5}
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
          />
        ))}
        {/* Animated firing signals */}
        <PulseSignals connections={connections} />
      </Group>
    </Group>
  );
};

const PulseSignals = ({ connections }: { connections: [THREE.Vector3, THREE.Vector3][] }) => {
  const signalCount = 8;
  const signals = useMemo(() => {
    return Array.from({ length: signalCount }).map(() => ({
      connectionIndex: Math.floor(Math.random() * connections.length),
      speed: 0.2 + Math.random() * 0.5,
      offset: Math.random()
    }));
  }, [connections]);

  const signalRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    signals.forEach((sig, i) => {
      const mesh = signalRefs.current[i];
      if (!mesh) return;

      const conn = connections[sig.connectionIndex];
      const t = (time * sig.speed + sig.offset) % 1;
      
      mesh.position.lerpVectors(conn[0], conn[1], t);
      
      // Glow intensity
      if (mesh.material instanceof THREE.MeshBasicMaterial) {
        mesh.material.opacity = Math.sin(t * Math.PI);
      }
    });
  });

  return (
    <>
      {signals.map((_, i) => (
        <Mesh key={i} ref={(el: any) => { if (el) signalRefs.current[i] = el; }}>
          <SphereGeometry args={[0.04, 8, 8]} />
          <MeshBasicMaterial color="#818cf8" transparent opacity={0.8} blending={THREE.AdditiveBlending} />
        </Mesh>
      ))}
    </>
  );
};

const BrainNetwork: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 dark:opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <AmbientLight intensity={0.5} />
        <NeuralNetwork />
      </Canvas>
    </div>
  );
};

export default BrainNetwork;
