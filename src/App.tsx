import { useEffect, useState } from "react";
import PlayField from "./modules/PlayField/PlayField";
import Button from "./ui/Button/Button";
import { Card } from "./ts/types";
import { fetchEmoji } from "./api/emoji";
import { prepareMemoryEmojis } from "./utils/dataTransformers";
import Container from "./ui/Container/Container";
import Loader from "./ui/Loader/Loader";
import GameWrap from "./modules/GameWrap/GameWrap";

function App() {
  const [fieldSize, setFieldSize] = useState<number>(16);
  const [cardDelay, setCardDelay] = useState<number>(5);

  const [emojis, setEmojis] = useState<(Card | null)[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setEmojis(Array.from({ length: fieldSize }, () => null));
  }, [fieldSize]);

  const loadEmojis = async () => {
    try {
      setLoading(true);
      setError("");

      if (emojis.length > 0) {
        setEmojis([]);
      }

      const data = await fetchEmoji();
      if (!data) throw new Error("No data received");

      const gameEmojis = prepareMemoryEmojis(data, fieldSize);

      setEmojis(gameEmojis);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Unknown error");
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <GameWrap
        fieldSize={setFieldSize}
        delay={cardDelay}
        changeDellay={setCardDelay}
      />
      <PlayField emojis={emojis} />
      <Button onClick={loadEmojis} type="button">
        Play
      </Button>
      {emojis.length === 0 && !loading && <p>Click on button for start play</p>}
      {loading && <Loader loading={loading} />}
      {error && <p>{error}</p>}
    </Container>
  );
}

export default App;
