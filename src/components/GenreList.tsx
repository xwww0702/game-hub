import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image_url";
import {
  Box,
  ListItem,
  HStack,
  Image,
  Text,
  List,
  Spinner,
  Button,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selecedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selecedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  isLoading && <Spinner />;
  if (error) return null;
  return (
    <>
      <List.Root listStyle={"none"}>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                onClick={() => {
                  onSelectGenre(genre);
                }}
                fontWeight={genre.id === selecedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="plain"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
