"use client";

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';
import { RobotHead } from './head';
import { RobotBody } from './body';

interface RobotProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  isPowered?: boolean;
}

export function Robot({ mouseX, mouseY, isPowered = false }: RobotProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const targetRotationY = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      (mouseX.get() - window.innerWidth / 2) / 500,
      0.1
    );

    const targetRotationX = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      (mouseY.get() - window.innerHeight / 2) / 500,
      0.1
    );

    groupRef.current.rotation.y = targetRotationY;
    groupRef.current.rotation.x = targetRotationX;
  });

  return (
    <group ref={groupRef}>
      <RobotHead mouseX={mouseX} mouseY={mouseY} isPowered={isPowered} />
      <RobotBody isPowered={isPowered} />
    </group>
  );
}