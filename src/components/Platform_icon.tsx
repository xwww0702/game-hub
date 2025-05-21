import type { Platform, Game } from "../hooks/useGames";
import { Text, Icon, HStack } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import type { IconType } from "react-icons/lib";
import { BsGlobe } from "react-icons/bs";
interface Platform_iconProps {
  platforms: Platform[];
}

const Platform_icon = ({ platforms }: Platform_iconProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    ios: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <HStack marginTop={1}>
      {/* //theme default is 4px */}
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id} />
      ))}
    </HStack>
  );
};

export default Platform_icon;
