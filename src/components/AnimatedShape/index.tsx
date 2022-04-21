import React from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const ShapeContaner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  canvas {
    height: 60vh;
    max-width: 90vw;
  }
`;

const AnimatedShape = () => {
  return (
    <ShapeContaner>
      <Canvas>
        <mesh>
          <torusKnotBufferGeometry args={[1, 0.4, 250, 50]} />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </ShapeContaner>
  );
};

export default AnimatedShape;
