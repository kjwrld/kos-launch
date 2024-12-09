import React from "react";
import { Canvas } from "@react-three/fiber";

const SceneThree = () => (
  <Canvas style={{ width: "100vw", height: "100vh" }}>
    <ambientLight intensity={0.5} />
    <mesh>
      <coneGeometry args={[1, 2, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  </Canvas>
);

export default SceneThree;
