
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function FloatingRing() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <torusGeometry args={[1, 0.2, 16, 50]} />
      <meshStandardMaterial color="#9b87f5" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <FloatingRing />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
