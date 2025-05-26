import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null; // Handle empty children case

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, limit);
  return (
    <>
      <Text>
        {expanded ? children : summary + "..."}
        {"  "}
        <Button
          size="xs"
          fontWeight="bold"
          colorPalette="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "show Less" : "show More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
