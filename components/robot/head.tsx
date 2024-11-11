"use client";

import { useRef } from 'react';
import { Mesh } from 'three';
import { MotionValue } from 'framer-motion';

interface RobotHeadProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  isPowered?: boolean;
}

export function RobotHead({ mouseX, mouseY, isPowered = false }: RobotHeadProps) {
  const headRef = useRef<Mesh>(null);

  return (
    <group>
      {/* Robotic Wig */}
      <group position={[0, 3.2, 0]}>
        {/* Base Hair Layer */}
        <mesh position={[0, 0.4, 0]}>
          <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#FF69B4"
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>

        {/* Hair Strands - Metallic Tubes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <group key={i} rotation={[0, (Math.PI * 2 * i) / 8, 0]}>
            <mesh position={[0.8, 0.2, 0]} rotation={[0.3, 0, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 2, 8]} />
              <meshStandardMaterial
                color="#FF69B4"
                metalness={0.9}
                roughness={0.1}
                envMapIntensity={1.2}
              />
            </mesh>
          </group>
        ))}

        {/* Glowing Hair Accessories */}
        <mesh position={[0.8, 0.3, 0.8]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#FF1493"
            emissive="#FF1493"
            emissiveIntensity={isPowered ? 1 : 0.5}
            metalness={1}
            roughness={0}
          />
        </mesh>
        <mesh position={[-0.8, 0.3, 0.8]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#FF1493"
            emissive="#FF1493"
            emissiveIntensity={isPowered ? 1 : 0.5}
            metalness={1}
            roughness={0}
          />
        </mesh>
      </group>

      {/* Main Head */}
      <mesh ref={headRef} position={[0, 2.5, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#8B5CF6"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Holographic Visor */}
      <mesh position={[0, 2.7, 1.02]}>
        <boxGeometry args={[1.8, 0.6, 0.1]} />
        <meshStandardMaterial
          color="#4C1D95"
          metalness={1}
          roughness={0}
          transparent={true}
          opacity={0.8}
          envMapIntensity={2}
        />
      </mesh>

      {/* Visor Energy Frame */}
      <mesh position={[0, 2.7, 1.05]}>
        <boxGeometry args={[1.85, 0.65, 0.02]} />
        <meshStandardMaterial
          color="#FF69B4"
          emissive="#FF69B4"
          emissiveIntensity={isPowered ? 1 : 0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Eyes with Energy Rings */}
      <mesh position={[-0.5, 2.7, 1.1]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color="#FF1493"
          emissive="#FF1493"
          emissiveIntensity={isPowered ? 1 : 0.7}
        />
      </mesh>
      <mesh position={[-0.5, 2.7, 1.15]}>
        <torusGeometry args={[0.15, 0.02, 16, 32]} />
        <meshStandardMaterial
          color="#FF69B4"
          emissive="#FF69B4"
          emissiveIntensity={isPowered ? 1 : 0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>
      <mesh position={[0.5, 2.7, 1.1]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color="#FF1493"
          emissive="#FF1493"
          emissiveIntensity={isPowered ? 1 : 0.7}
        />
      </mesh>
      <mesh position={[0.5, 2.7, 1.15]}>
        <torusGeometry args={[0.15, 0.02, 16, 32]} />
        <meshStandardMaterial
          color="#FF69B4"
          emissive="#FF69B4"
          emissiveIntensity={isPowered ? 1 : 0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Side Panels with Energy Trim */}
      <mesh position={[-1.1, 2.5, 0]}>
        <boxGeometry args={[0.2, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#6D28D9"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1}
        />
      </mesh>
      <mesh position={[-1.1, 2.5, 0.4]}>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial
          color="#FF69B4"
          emissive="#FF69B4"
          emissiveIntensity={isPowered ? 0.6 : 0.3}
          metalness={1}
          roughness={0}
        />
      </mesh>
      <mesh position={[1.1, 2.5, 0]}>
        <boxGeometry args={[0.2, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#6D28D9"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1}
        />
      </mesh>
      <mesh position={[1.1, 2.5, 0.4]}>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial
          color="#FF69B4"
          emissive="#FF69B4"
          emissiveIntensity={isPowered ? 0.6 : 0.3}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </group>
  );
}