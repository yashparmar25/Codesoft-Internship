import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, Mesh, SphereGeometry } from "three";

// Placeholder component for debugging
const PlaceholderEarth = () => (
  <Mesh>
    <SphereGeometry args={[1, 32, 32]} />
    <MeshStandardMaterial
      color="lightgreen"
      emissive="white"
      emissiveIntensity={0.5}
    />
  </Mesh>
);

const Earth = () => {
  const { scene, error } = useGLTF("/planet/planet/scene.gltf");

  // Check for loading errors
  if (error) {
    console.error("Error loading GLTF model:", error);
    return <PlaceholderEarth />;
  }

  // Log to ensure the model is loaded
  console.log("GLTF Model Loaded:", scene);

  // Apply a color mix to the Earth model
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new MeshStandardMaterial({
        color: "lightgreen", // Base color
        emissive: "white", // Emissive color to give a glowing white effect
        emissiveIntensity: 0.5, // Adjust the intensity of the white glow
      });
    }
  });

  return (
    <primitive
      object={scene}
      scale={3}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  // Inline style for loading indicator
  const loadingStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "24px",
    color: "#ffffff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px",
    borderRadius: "5px",
    zIndex: 1000, // Ensure it's above everything
  };

  return (
    <>
      {loading && <div style={loadingStyle}>Loading...</div>}
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </>
  );
};

export default EarthCanvas;
