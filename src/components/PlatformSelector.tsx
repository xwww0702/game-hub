import usePlatform from "@/hooks/usePlatform";
import {
  Button,
  Menu,
  MenuCheckboxItem,
  Portal,
  useCheckboxGroup,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const group = useCheckboxGroup({ defaultValue: ["autosave"] });
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown /> Platform
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Platform</Menu.ItemGroupLabel>
              {data.map(({ id, name }) => (
                <Menu.CheckboxItem
                  key={id}
                  value={name}
                  checked={group.isChecked(name)}
                  onCheckedChange={() => group.toggleValue(name)}
                >
                  {name}
                  <Menu.ItemIndicator />
                </Menu.CheckboxItem>
              ))}
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
