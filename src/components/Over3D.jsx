/* eslint-disable react/no-unknown-property */
import { Box, Scroll } from "@react-three/drei";
import Test3D from "./Over3D/Test";
import { useThree } from "@react-three/fiber";
import Title1 from "./Over3D/Title1";
import Title2 from "./Over3D/Title2";
import TitleConText from "./Over3D/TitleConText";

export default function Over3D() {
  const { viewport } = useThree();
  return (
    <Scroll>
      <group position={[0, 0, 0]}>
        <group position={[0, 1.5, -1.5]}>
          <TitleConText position={[0, 1.2, 0]}/>
          <Title1 position={[0, 0, 0]}/>
          <Title2 position={[0, -1.2, 0]}/>          
        </group>
      </group>
      <group position={[0, -viewport.height, 0]}>
        <Box position={[0, 0, 0]}></Box>
        <Test3D />
      </group>
      <group position={[0, -viewport.height * 2, 0]}>
        <Box position={[0, 0, 0]}></Box>
        <Test3D />
      </group>
      <group position={[0, -viewport.height * 3, 0]}>
        <Box position={[0, 0, 0]}></Box>
        <Test3D />
      </group>
      <group position={[0, -viewport.height * 4, 0]}>
        <Box position={[0, 0, 0]}></Box>
        <Test3D />
      </group>
    </Scroll>
  );
}
