import useGameQueryStore from "@/store";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const setOrder = useGameQueryStore((s) => s.setOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const sortOders = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-rating", label: "Average Rating" },
    { value: "-metacritic", label: "Popularity" },
  ];
  const currentSortOrder = sortOders.find((order) => order.value === sortOrder);
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown /> Order by: {currentSortOrder?.label || "Relevence"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOders.map((order) => (
              <Menu.Item
                key={order.value}
                value={order.value}
                onClick={() => {
                  setOrder(order.value);
                }}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
