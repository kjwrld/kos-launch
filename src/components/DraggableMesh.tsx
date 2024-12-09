import React, { useState } from "react";
// import { ThreeEvent } from "@react-three/fiber";

interface DraggableMeshProps {
  geometry: React.ReactNode;
  color: string;
}

const DraggableMesh: React.FC<DraggableMeshProps> = ({ geometry, color }) => {
  const [position] = useState<[number, number, number]>([0, 0, 0]);
  //   const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  //   const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
  //     setRotation([event.point.y / 2, event.point.x / 2, 0]);
  //   };

  return (
    <mesh
      position={position}
      //   rotation={rotation}
      //   onPointerMove={handlePointerMove}
    >
      {geometry}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default DraggableMesh;
