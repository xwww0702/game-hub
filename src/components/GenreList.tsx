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
import { debounce } from "lodash";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selecedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selecedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const handleSelectGenre = debounce((genre: Genre) => {
    onSelectGenre(genre);
  }, 300); // 300ms 防抖延迟

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
                  handleSelectGenre(genre);
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
