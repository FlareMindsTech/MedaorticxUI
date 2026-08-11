import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * MedicalHelix — Procedural double-helix (DNA-style) built from individual
 * sphere meshes and cylinder rungs. Rotates slowly with a gentle bob.
 * Uses individual meshes instead of instancing for maximum R3F compatibility.
 */

// Shared geometries and materials for maximum rendering performance & memory reuse
const nodeSphereGeo = new THREE.SphereGeometry(0.05, 8, 8);
const rungCylinderGeo = new THREE.CylinderGeometry(0.015, 0.015, 1, 6);

const strandAMaterial = new THREE.MeshStandardMaterial({
  color: '#6D4DE0',
  emissive: '#6D4DE0',
  emissiveIntensity: 0.25,
  roughness: 0.25,
  metalness: 0.55,
});

const strandBMaterial = new THREE.MeshStandardMaterial({
  color: '#1FC7C0',
  emissive: '#1FC7C0',
  emissiveIntensity: 0.25,
  roughness: 0.25,
  metalness: 0.55,
});

const rungMaterial = new THREE.MeshStandardMaterial({
  color: '#a78bfa',
  emissive: '#7c3aed',
  emissiveIntensity: 0.1,
  transparent: true,
  opacity: 0.55,
  roughness: 0.4,
  metalness: 0.3,
});

const HelixNode = ({ position, isStrandA }) => (
  <mesh
    position={position}
    geometry={nodeSphereGeo}
    material={isStrandA ? strandAMaterial : strandBMaterial}
  />
);

const HelixRung = ({ from, to }) => {
  const { mid, quaternion, length } = useMemo(() => {
    const midPoint = new THREE.Vector3().addVectors(from, to).multiplyScalar(0.5);
    const dir = new THREE.Vector3().subVectors(to, from);
    const len = dir.length();
    const quat = new THREE.Quaternion();
    quat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    return { mid: midPoint, quaternion: quat, length: len };
  }, [from, to]);

  return (
    <mesh
      position={mid}
      quaternion={quaternion}
      scale={[1, length, 1]}
      geometry={rungCylinderGeo}
      material={rungMaterial}
    />
  );
};

const MedicalHelix = ({
  nodeCount = 36,
  helixRadius = 0.55,
  helixHeight = 3.4,
  rotationSpeed = 0.2,
  colorA = '#6D4DE0',
  colorB = '#1FC7C0',
}) => {
  const groupRef = useRef();

  // Pre-compute all helix geometry data
  const { strandA, strandB, rungPairs } = useMemo(() => {
    const sA = [];
    const sB = [];
    const pairs = [];
    const halfHeight = helixHeight / 2;

    for (let i = 0; i < nodeCount; i++) {
      const t = i / (nodeCount - 1);
      const y = -halfHeight + t * helixHeight;
      const angle = t * Math.PI * 4; // 2 full twists

      const ax = Math.cos(angle) * helixRadius;
      const az = Math.sin(angle) * helixRadius;
      const bx = Math.cos(angle + Math.PI) * helixRadius;
      const bz = Math.sin(angle + Math.PI) * helixRadius;

      sA.push([ax, y, az]);
      sB.push([bx, y, bz]);

      // Connect every 3rd pair with a rung
      if (i % 3 === 0) {
        pairs.push({
          from: new THREE.Vector3(ax, y, az),
          to: new THREE.Vector3(bx, y, bz),
        });
      }
    }
    return { strandA: sA, strandB: sB, rungPairs: pairs };
  }, [nodeCount, helixRadius, helixHeight]);

  // Animate continuous rotation + gentle bob
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * rotationSpeed;
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Strand A — indigo */}
      {strandA.map((pos, i) => (
        <HelixNode key={`a-${i}`} position={pos} isStrandA={true} />
      ))}

      {/* Strand B — teal */}
      {strandB.map((pos, i) => (
        <HelixNode key={`b-${i}`} position={pos} isStrandA={false} />
      ))}

      {/* Connecting rungs */}
      {rungPairs.map((pair, i) => (
        <HelixRung key={`r-${i}`} from={pair.from} to={pair.to} />
      ))}
    </group>
  );
};

export default MedicalHelix;
