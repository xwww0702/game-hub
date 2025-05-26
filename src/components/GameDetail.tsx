import type { Game } from "@/Entities/Game";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
interface Props {
  term: string;
  children?: React.ReactNode | React.ReactNode[];
}
const GameDetail = ({ term, children }: Props) => {
  return (
    <Box marginTop={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default GameDetail;
