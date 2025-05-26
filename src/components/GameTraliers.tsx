import useMovie from "@/hooks/useMovie";
interface Props {
  gameId: number;
}
const GameTraliers = ({ gameId }: Props) => {
  const { data, isLoading, error } = useMovie(gameId);
  if (isLoading) return <div>Loading...</div>;
  if (error) throw error;
  const first = data?.results[0];
  if (!first) return null;
  return <video src={first.data[480]} poster={first.preview} controls></video>;
};

export default GameTraliers;
