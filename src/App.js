import React, { useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useThree, extend } from "react-three-fiber";

import "./App.css";

extend({ OrbitControls });

function Cube(props) {
  const [isBig, setIsBig] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const size = isBig ? 2 : 1;
  const color = isHovered ? "pink" : "salmon";

  return (
    <mesh
      {...props}
      onClick={() => setIsBig(!isBig)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxBufferGeometry attach="geometry" args={[size, size, size]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}
// args are [width, height , depth]

function Scene() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return (
    <>
      <ambientLight />
      <pointLight intensity={0.3} position={[-1, 2, 4]} />
      <Cube rotation={[10, 10, 0]} position={[0, 0, 0]} />
      <orbitControls args={[camera, domElement]} />
    </>
  );
}

function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

export default App;
