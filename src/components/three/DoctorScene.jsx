import React, { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { DoctorFigure } from '../hero/DoctorFigure';

function FloatingParticles() {
  const groupRef = useRef();
  const particles = useMemo(() => {
    const items = [];
    const shapes = ['cross', 'pill', 'ring', 'heart', 'sphere'];
    for (let i = 0; i < 20; i++) {
      items.push({
        shape: shapes[i % shapes.length],
        pos: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6 - 2,
        ],
        rot: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: 0.08 + Math.random() * 0.15,
        color: i % 3 === 0 ? '#6D4DE0' : i % 3 === 1 ? '#1FC7C0' : '#8B5CF6',
      });
    }
    return items;
  }, []);

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.pos} rotation={p.rot} scale={p.scale}>
          {p.shape === 'cross' && <boxGeometry args={[1.2, 0.35, 0.35]} />}
          {p.shape === 'pill' && <capsuleGeometry args={[0.25, 0.8, 8, 16]} />}
          {p.shape === 'ring' && <torusGeometry args={[0.4, 0.12, 8, 20]} />}
          {p.shape === 'heart' && <sphereGeometry args={[0.4, 10, 10]} />}
          {p.shape === 'sphere' && <dodecahedronGeometry args={[0.4, 0]} />}
          <meshStandardMaterial
            color={p.color}
            roughness={0.4}
            metalness={0.2}
            transparent
            opacity={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

export const DoctorScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          toneMapping: THREE.NoToneMapping,
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault fov={34} position={[0, 0, 9]} />
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 4, 5]} intensity={1.8} />
        <directionalLight position={[-3, 2, 3]} intensity={0.8} />
        <pointLight position={[-2, 2, 2]} color="#6D4DE0" intensity={1.2} />
        <pointLight position={[2, 1, 2]} color="#1FC7C0" intensity={1.2} />

        <FloatingParticles />

        <Suspense fallback={null}>
          <DoctorFigure />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DoctorScene;
