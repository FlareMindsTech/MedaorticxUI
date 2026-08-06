import React, { useRef, useEffect, useMemo, useCallback } from "react";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { useGLTF, Center, Resize, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const DoctorFigure = ({ onPointerOver, onPointerOut, onClick }) => {
  const groupRef = useRef();

  const rUpperArmRef = useRef(null);
  const rForearmRef = useRef(null);
  const rHandRef = useRef(null);
  const lUpperArmRef = useRef(null);
  const lForearmRef = useRef(null);
  const lHandRef = useRef(null);
  const lThighRef = useRef(null);
  const rThighRef = useRef(null);

  const isWavingRef = useRef(false);
  const waveStartTimeRef = useRef(0);

  const { scene, animations } = useGLTF("/doctor_-_sketchfab_weekly_-_13_mar23.glb");
  const clonedScene = useMemo(() => cloneSkeleton(scene), [scene]);
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = Object.values(actions)[0];
      firstAction?.play();
    }
  }, [actions]);

  useEffect(() => {
    rUpperArmRef.current = clonedScene.getObjectByName("Bip001 R UpperArm_015");
    rForearmRef.current = clonedScene.getObjectByName("Bip001 R Forearm_016");
    rHandRef.current = clonedScene.getObjectByName("Bip001 R Hand_017") || clonedScene.getObjectByName("hand_R");
    lUpperArmRef.current = clonedScene.getObjectByName("Bip001 L UpperArm_07");
    lForearmRef.current = clonedScene.getObjectByName("Bip001 L Forearm_08");
    lHandRef.current = clonedScene.getObjectByName("Bip001 L Hand_09") || clonedScene.getObjectByName("hand_L");
    lThighRef.current = clonedScene.getObjectByName("Bip001 L Thigh_024");
    rThighRef.current = clonedScene.getObjectByName("Bip001 R Thigh_028");

    // Attach 3D Notepad to Left Hand bone
    if (lHandRef.current && !lHandRef.current.getObjectByName("notepadMesh")) {
      const notepadGroup = new THREE.Group();
      notepadGroup.name = "notepadMesh";

      // Notepad base
      const padMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.24, 0.015),
        new THREE.MeshStandardMaterial({ color: "#2563EB", roughness: 0.3 })
      );
      notepadGroup.add(padMesh);

      // Paper sheet
      const paperMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.16, 0.22, 0.004),
        new THREE.MeshStandardMaterial({ color: "#FFFFFF", roughness: 0.6 })
      );
      paperMesh.position.z = 0.009;
      notepadGroup.add(paperMesh);

      // Clip on top
      const clipMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 0.025, 0.008),
        new THREE.MeshStandardMaterial({ color: "#64748B", metalness: 0.8 })
      );
      clipMesh.position.set(0, 0.1, 0.01);
      notepadGroup.add(clipMesh);

      notepadGroup.position.set(0.02, 0.04, 0);
      notepadGroup.rotation.set(0.2, 0.3, 0.5);
      lHandRef.current.add(notepadGroup);
    }

    // Attach 3D Pen to Right Hand bone
    if (rHandRef.current && !rHandRef.current.getObjectByName("penMesh")) {
      const penMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.008, 0.008, 0.15, 12),
        new THREE.MeshStandardMaterial({ color: "#1FC7C0", metalness: 0.6 })
      );
      penMesh.name = "penMesh";
      penMesh.position.set(0.01, 0.03, 0.02);
      penMesh.rotation.set(1.2, 0, 0.4);
      rHandRef.current.add(penMesh);
    }
  }, [clonedScene]);

  // Wave animation trigger function (Debounced)
  const triggerWave = useCallback(() => {
    if (isWavingRef.current) return;
    isWavingRef.current = true;
    waveStartTimeRef.current = performance.now() / 1000;
  }, []);

  // Auto wave ~800ms after load
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerWave();
    }, 800);
    return () => clearTimeout(timer);
  }, [triggerWave]);

  const handlePointerOver = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "pointer";
    triggerWave();
    if (onPointerOver) onPointerOver(e);
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "auto";
    if (onPointerOut) onPointerOut(e);
  };

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // 1. Standing posture with subtle rotation
    if (groupRef.current) {
      groupRef.current.position.y = 0.05;
      groupRef.current.rotation.y = Math.sin(t * 1.2) * (Math.PI / 10);
    }

    // 2. Left Arm pose: holding notepad in front of chest
    if (lUpperArmRef.current) {
      lUpperArmRef.current.rotation.z = 0.7;
      lUpperArmRef.current.rotation.y = -0.5;
      lUpperArmRef.current.rotation.x = 0.4;
    }
    if (lForearmRef.current) {
      lForearmRef.current.rotation.z = 0.8;
      lForearmRef.current.rotation.y = 0.3;
    }

    // 3. Right Arm pose: writing on notepad vs waving when triggered
    let targetArmZ = -0.85;
    let targetArmY = 0.4;
    let targetArmX = 0.3;
    let targetForearmY = 0.7;

    if (isWavingRef.current) {
      const waveElapsed = t - waveStartTimeRef.current;
      const totalDuration = 2.0;

      if (waveElapsed < 0.4) {
        const progress = waveElapsed / 0.4;
        targetArmZ = -0.85 + (-1.8 - (-0.85)) * Math.sin((progress * Math.PI) / 2);
      } else if (waveElapsed < 1.6) {
        targetArmZ = -1.8;
        const oscElapsed = waveElapsed - 0.4;
        targetForearmY = 0.7 + Math.sin(oscElapsed * 14) * 0.5;
      } else if (waveElapsed < totalDuration) {
        const progress = (waveElapsed - 1.6) / 0.4;
        targetArmZ = -1.8 + (-0.85 - (-1.8)) * Math.sin((progress * Math.PI) / 2);
      } else {
        isWavingRef.current = false;
      }
    } else {
      // Natural pen scribbling / writing animation on notepad
      targetForearmY = 0.7 + Math.sin(t * 8) * 0.2;
    }

    if (rUpperArmRef.current) {
      rUpperArmRef.current.rotation.z += (targetArmZ - rUpperArmRef.current.rotation.z) * 0.15;
      rUpperArmRef.current.rotation.y += (targetArmY - rUpperArmRef.current.rotation.y) * 0.15;
      rUpperArmRef.current.rotation.x += (targetArmX - rUpperArmRef.current.rotation.x) * 0.15;
    }
    if (rForearmRef.current) {
      rForearmRef.current.rotation.y += (targetForearmY - rForearmRef.current.rotation.y) * 0.15;
    }
    if (rHandRef.current) {
      rHandRef.current.rotation.z = Math.sin(t * 8) * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.05, 0]}>
      {/* Doctor Model & Standing Platform */}
      <group
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={(e) => {
          e.stopPropagation();
          triggerWave();
          if (onClick) onClick(e);
        }}
      >
        <Center bottom>
          <Resize scale={2.65}>
            <primitive object={clonedScene} rotation={[0, 0, 0]} />
          </Resize>
        </Center>
      </group>
    </group>
  );
};

useGLTF.preload("/doctor_-_sketchfab_weekly_-_13_mar23.glb");
export default DoctorFigure;
