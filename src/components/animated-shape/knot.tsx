import React from "react";
import { BufferGeometry, Material, Mesh } from "three";
import { useFrame } from "@react-three/fiber";

function Knot() {
  const mesh = React.useRef<Mesh<BufferGeometry, Material | Material[]> | null>(null);

  useFrame(() =>
      mesh.current &&
      (mesh.current.rotation.x = mesh.current.rotation.x += 0.01)
  );

  
  return (
    <mesh ref={mesh}>
      <torusKnotBufferGeometry args={[1, 0.4, 250, 500]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default Knot;
