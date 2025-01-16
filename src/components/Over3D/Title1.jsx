import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Title1({ position }) {
  const { viewport } = useThree();
  return (
    <Text
      position={position}
      color={'black'}
      fontSize={viewport.width > 6 ? viewport.width / 16 : viewport.width / 7}
      textAlign="center"
      font={"/public/font/Pretendard-bold.otf"}
    >
      3D Interactive 
    </Text>
  );
}
