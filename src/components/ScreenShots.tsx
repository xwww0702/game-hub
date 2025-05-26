import useScreenShots from "@/hooks/useScreenShots";
import { SimpleGrid } from "@chakra-ui/react";
interface Props {
  gameId: number;
}
const ScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);
  if (isLoading) return <div>Loading...</div>;
  if (error) throw error;
  const first = data?.results;
  if (!first) return null;
  console.log(data);
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
      {first.map((screenshot) => (
        <img
          key={screenshot.id}
          src={screenshot.image}
          alt={screenshot.id.toString()}
        />
      ))}
    </SimpleGrid>
  );
};

export default ScreenShots;
