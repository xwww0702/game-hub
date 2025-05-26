import useGenres from "@/hooks/useGenres";
import type Genre from "@/Entities/Genre";
import getCroppedImageUrl from "@/services/image_url";
import useGameQueryStore from "@/store";
import {
  ListItem,
  HStack,
  Image,
  List,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import { debounce } from "lodash";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenre = useGameQueryStore((s) => s.setGenre);
  const { data, isLoading, error } = useGenres();
  const handleSelectGenre = debounce((genre: Genre) => {
    setGenre(genre.id);
  }, 300); // 300ms 防抖延迟

  isLoading && <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize="lg">Genres</Heading>
      <List.Root listStyle={"none"}>
        {data?.results.map((genre) => (
          // <ListItem key={genre.id} paddingY="5px" max-width="100%">
          //   <HStack gap={2}>
          //     <Image
          //       boxSize="32px"
          //       borderRadius={8}
          //       objectFit="cover"
          //       src={getCroppedImageUrl(genre.image_background)}
          //     ></Image>
          //     <Button
          //       onClick={() => {
          //         handleSelectGenre(genre);
          //       }}
          //       fontWeight={genre.id === selecedGenre?.id ? "bold" : "normal"}
          //       fontSize="lg"
          //       width="120px"
          //       variant="solid"
          //       whiteSpace="normal"
          //       textAlign="left"
          //       p="0"
          //       m="0"
          //       px="0"
          //       py="0"
          //     >
          //       {genre.name}
          //     </Button>
          //   </HStack>
          // </ListItem>
          <ListItem key={genre.id} py="5px" maxW="100%">
            <HStack gap={2} align="center">
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              {/* 按钮里面的文字一直没有对齐，justifyContent="flex-start"，加了这个就对齐了 */}
              <Button
                onClick={() => handleSelectGenre(genre)}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="md"
                variant="ghost"
                justifyContent="flex-start"
                textAlign="left"
                whiteSpace="normal"
                w="120px"
                h="auto"
                minW="unset"
                p="0"
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
