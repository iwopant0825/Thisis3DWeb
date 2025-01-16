import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function TitleConText({ position }) {
  const { viewport } = useThree();
  return (
    <Text
      position={position}
      color={'black'}
      fontSize={viewport.width > 6 ? viewport.width / 40 : viewport.width / 12}
      textAlign="center"
      font={"/public/font/Pretendard-Light.otf"}
    >
      This is
    </Text>
  );
}
