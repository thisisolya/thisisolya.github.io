import React from "react";
import styled from "styled-components";
import {
  Canvas,
  ReactThreeFiber,
  extend,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
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

const ShapeContaner = styled.div`
  align-items: center; 
  flex: 1;
  canvas {
    background-color: black;
    height: 60vh;
    width: 70vw;
  }
`;

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controls = React.useRef<any>();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
};

const Knot = () => {
  const mesh = React.useRef<any>();
  useFrame(() => mesh.current.rotation.x = mesh.current.rotation.x += 0.01);
  return (
    <mesh ref={mesh}>
      <torusKnotBufferGeometry args={[1, 0.4, 250, 50]} />
      <meshNormalMaterial />
    </mesh>
  );
};

const AnimatedShape = () => {
  return (
    <ShapeContaner>
      <Canvas camera={{ position: [1, 5, 1], fov: 70 }}>
        <CameraControls />
        <Knot />
        <pointLight intensity={1} />
      </Canvas>
    </ShapeContaner>
  );
};

export default AnimatedShape;
