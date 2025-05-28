import type Game from "@/Entities/Game";
import { Card, HStack, Image } from "@chakra-ui/react";
import Platform_icon from "./Platform_icon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image_url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
import { useTracker } from "@/hooks/useTracker";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const trackEvent = useTracker("local_user");
  const handleBuyClick = () => {
    trackEvent("click_game", {
      userId: "local_user",
      productId: game.id,
    });
    // 业务逻辑
  };
  return (
    <Link to={`/games/${game.slug}`} onClick={() => handleBuyClick()}>
      <Card.Root
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        }}
      >
        <Image src={getCroppedImageUrl(game.background_image)} />
        <Card.Body>
          <HStack justifyContent="space-between" marginBottom={3}>
            <Platform_icon
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></Platform_icon>
            <CriticScore score={game.metacritic} />
          </HStack>
          <Card.Title fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Card.Title>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default GameCard;
