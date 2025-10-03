import Loader from "../../ui/Loader/Loader";

interface Props {
  loading: boolean;
  error: string;
}

export default function GameStatus({ loading, error }: Props) {
  if (loading) return <Loader loading />;
  if (error) return <p>{error}</p>;
  return null;
}
