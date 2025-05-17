import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
        colorPalette="green"
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label />
      </Switch.Root>
      <Text>Light Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
