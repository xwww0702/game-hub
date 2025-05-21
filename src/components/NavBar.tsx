import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Gamer.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchTerm: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image boxSize="60px" src={logo} alt="Logo" />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
