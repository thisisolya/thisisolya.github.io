import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function CameraControls(): React.ReactElement {
  const { camera, gl } = useThree();
  const controls = React.useRef<OrbitControls>(null);

  useFrame(() => controls.current && controls.current.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableZoom={true}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
}

export default CameraControls;
