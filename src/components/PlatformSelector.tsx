import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const setPlatform = useGameQueryStore((s) => s.setPlatform);
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data, error } = usePlatform();
  const platform = usePlatforms(selectedPlatform);
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown /> {platform?.name || "Platform"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => {
              return (
                <Menu.Item
                  key={platform.id}
                  value={platform.name}
                  onClick={() => setPlatform(platform.id)}
                >
                  {platform.name}
                </Menu.Item>
              );
            })}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
