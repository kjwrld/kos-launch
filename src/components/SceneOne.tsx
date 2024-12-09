import React from "react";
import { Canvas } from "@react-three/fiber";

const SceneOne = () => (
  <Canvas style={{ width: "100vw", height: "100vh" }}>
    <ambientLight intensity={0.5} />
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  </Canvas>
);

export default SceneOne;
