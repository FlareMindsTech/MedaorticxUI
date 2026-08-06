import React, { useRef, useEffect, useMemo } from "react";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { useGLTF, Center, Resize, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Doctor = ({ rimIndigoRef, rimTealRef }) => {
  const groupRef = useRef();

  const rUpperArmRef = useRef(null);
  const rForearmRef = useRef(null);
  const rHandRef = useRef(null);
  const lUpperArmRef = useRef(null);
  const lForearmRef = useRef(null);
  const lThighRef = useRef(null);
  const rThighRef = useRef(null);

  const { scene, animations } = useGLTF("/doctor_-_sketchfab_weekly_-_13_mar23.glb");

  const clonedScene = useMemo(() => cloneSkeleton(scene), [scene]);

  useEffect(() => {
    rUpperArmRef.current = clonedScene.getObjectByName("Bip001 R UpperArm_015");
    rForearmRef.current = clonedScene.getObjectByName("Bip001 R Forearm_016");
    rHandRef.current = clonedScene.getObjectByName("Bip001 R Hand_017") || clonedScene.getObjectByName("hand_R");
    lUpperArmRef.current = clonedScene.getObjectByName("Bip001 L UpperArm_07");
    lForearmRef.current = clonedScene.getObjectByName("Bip001 L Forearm_08");
    lThighRef.current = clonedScene.getObjectByName("Bip001 L Thigh_024");
    rThighRef.current = clonedScene.getObjectByName("Bip001 R Thigh_028");
  }, [clonedScene]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Rotation only — no position.y here. <Center bottom> owns vertical placement.
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.12;
    }

    if (rUpperArmRef.current) {
      rUpperArmRef.current.rotation.z = -1.15 + Math.sin(t * 1.5) * 0.08;
      rUpperArmRef.current.rotation.y = 0.35 + Math.cos(t * 1.5) * 0.06;
      rUpperArmRef.current.rotation.x = 0.3;
    }
    if (rForearmRef.current) {
      rForearmRef.current.rotation.y = 0.8 + Math.sin(t * 3.5) * 0.35;
      rForearmRef.current.rotation.z = 0.2 + Math.cos(t * 3) * 0.18;
    }
    if (rHandRef.current) {
      rHandRef.current.rotation.z = Math.sin(t * 4.5) * 0.3;
    }
    if (lUpperArmRef.current) {
      lUpperArmRef.current.rotation.z = 0.2 + Math.sin(t * 1.2) * 0.04;
    }
    if (lForearmRef.current) {
      lForearmRef.current.rotation.z = 0.15 + Math.sin(t * 1.5) * 0.05;
    }
    if (lThighRef.current && rThighRef.current) {
      lThighRef.current.rotation.x = Math.sin(t) * 0.04;
      rThighRef.current.rotation.x = -Math.sin(t) * 0.04;
    }

    if (rimIndigoRef?.current) rimIndigoRef.current.intensity = 1.2 + Math.sin(t * 1.5) * 0.2;
    if (rimTealRef?.current) rimTealRef.current.intensity = 1.2 + Math.cos(t * 1.4) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.03} floatIntensity={0.08}>
        <Center bottom>
          <Resize scale={1.9}>
            <primitive
              object={clonedScene}
              scale={1.25}
              position={[0, -1.2, 0]}
            />
          </Resize>
        </Center>
      </Float>
    </group>
  );
};

useGLTF.preload("/doctor_-_sketchfab_weekly_-_13_mar23.glb");