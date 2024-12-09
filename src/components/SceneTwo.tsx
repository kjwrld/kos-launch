import React from "react";
import { Canvas } from "@react-three/fiber";

const SceneTwo = () => (
  <Canvas style={{ width: "100vw", height: "100vh" }}>
    <ambientLight intensity={0.5} />
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="green" />
    </mesh>
  </Canvas>
);

export default SceneTwo;
