import { Card } from "../../ts/types";
import Loader from "../../ui/Loader/Loader";

interface Props {
  emojis: (Card | null)[];
  loading: boolean;
  error: string;
}

export default function GameStatus({ emojis, loading, error }: Props) {
  if (loading) return <Loader loading />;
  if (error) return <p>{error}</p>;
  if (emojis.length === 0) return <p>Click on button for start play</p>;
  return null;
}
