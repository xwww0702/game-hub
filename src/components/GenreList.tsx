import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image_url";
import {
  Box,
  ListItem,
  HStack,
  Image,
  Text,
  List,
  Spinner,
} from "@chakra-ui/react";

const GenreList = () => {
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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
