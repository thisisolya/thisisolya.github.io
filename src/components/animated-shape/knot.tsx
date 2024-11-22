import React from "react";
import { BufferGeometry, Material, Mesh } from "three";
import { useFrame } from "@react-three/fiber";

function Knot(): React.ReactElement {
  const mesh = React.useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh}>
      <torusKnotBufferGeometry args={[1, 0.4, 250, 500]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default Knot;
