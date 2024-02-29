import React from "react";
import styled from "styled-components";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ReactThreeFiber } from "@react-three/fiber";
import CameraControls from "./camera-controls";
import Knot from "./knot";

const ShapeContainer = styled.div`
  align-items: center;
  flex: 1;
  canvas {
    background-color: black;
    height: 60vh;
    width: 100%;
  }
`;

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

function AnimatedShape() {
  return (
    <ShapeContainer>
      <Canvas camera={{ position: [1, 5, 1], fov: 70 }}>
        <CameraControls />
        <Knot />
        <pointLight intensity={1} />
      </Canvas>
    </ShapeContainer>
  );
}

export default AnimatedShape;
