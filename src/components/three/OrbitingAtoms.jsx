import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * OrbitingAtoms — 4 glowing spheres orbiting the central helix
 * with sinusoidal vertical oscillation and pulsing emissive glow.
 */

const ATOMS = [
  { orbitRadius: 1.1,  speed: 0.6,  yAmp: 0.4,  phase: 0,              size: 0.09, color: '#6D4DE0', emissive: '#6D4DE0' },
  { orbitRadius: 0.85, speed: 0.85, yAmp: 0.55, phase: Math.PI * 0.6,  size: 0.07, color: '#1FC7C0', emissive: '#1FC7C0' },
  { orbitRadius: 1.3,  speed: 0.45, yAmp: 0.3,  phase: Math.PI * 1.2,  size: 0.065, color: '#8B5CF6', emissive: '#8B5CF6' },
  { orbitRadius: 0.7,  speed: 1.0,  yAmp: 0.65, phase: Math.PI * 1.8,  size: 0.055, color: '#3AD9C9', emissive: '#3AD9C9' },
];

// Shared geometry base
const sharedSphereGeo = new THREE.SphereGeometry(1, 10, 10);

const Atom = ({ orbitRadius, speed, yAmp, phase, size, color, emissive }) => {
  const mainRef = useRef();
  const trailRef = useRef();
  const matRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const angle = t * speed + phase;

    if (mainRef.current) {
      mainRef.current.position.x = Math.cos(angle) * orbitRadius;
      mainRef.current.position.z = Math.sin(angle) * orbitRadius;
      mainRef.current.position.y = Math.sin(t * speed * 1.3 + phase) * yAmp;
    }

    // Pulsing emissive glow
    if (matRef.current) {
      matRef.current.emissiveIntensity = 0.5 + Math.sin(t * 2.5 + phase) * 0.3;
    }

    // Ghost trail follows slightly behind
    if (trailRef.current) {
      const trailAngle = angle - 0.35;
      trailRef.current.position.x = Math.cos(trailAngle) * orbitRadius;
      trailRef.current.position.z = Math.sin(trailAngle) * orbitRadius;
      trailRef.current.position.y = Math.sin((t - 0.18) * speed * 1.3 + phase) * yAmp;
    }
  });

  return (
    <>
      {/* Main atom sphere */}
      <mesh ref={mainRef} geometry={sharedSphereGeo} scale={[size, size, size]}>
        <meshStandardMaterial
          ref={matRef}
          color={color}
          emissive={emissive}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.6}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* Ghost trail */}
      <mesh ref={trailRef} geometry={sharedSphereGeo} scale={[size * 0.5, size * 0.5, size * 0.5]}>
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.25}
          transparent
          opacity={0.28}
          roughness={0.5}
        />
      </mesh>
    </>
  );
};

const OrbitingAtoms = () => {
  return (
    <group>
      {ATOMS.map((atom, i) => (
        <Atom key={i} {...atom} />
      ))}
    </group>
  );
};

export default OrbitingAtoms;
