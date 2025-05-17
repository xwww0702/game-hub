import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Gamer.png";
const NavBar = () => {
  return (
    <HStack>
      <Image boxSize="60px" src={logo} alt="Logo" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
