import { BiSolidGame } from "react-icons/bi";
import { CgGames } from "react-icons/cg";
import { SiRiotgames } from "react-icons/si";
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  return (
    <>
      {rating === 3 && <BiSolidGame />}
      {rating === 4 && <CgGames />}
      {rating === 5 && <SiRiotgames />}
    </>
  );
};

export default Emoji;
