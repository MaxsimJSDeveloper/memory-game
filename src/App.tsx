import { useState } from "react";
import PlayField from "./modules/PlayField/PlayField";
import Button from "./ui/Button/Button";
import { Emoji } from "./ts/types";
import { fetchEmoji } from "./api/emoji";
import { prepareMemoryEmojis } from "./utils/dataTransformers";
import Container from "./ui/Container/Container";
import Loader from "./ui/Loader/Loader";

function App() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const loadEmojis = async () => {
    try {
      setLoading(true);
      setError("");

      if (emojis.length > 0) {
        setEmojis([]);
      }

      const data = await fetchEmoji();
      if (!data) throw new Error("No data received");

      const gameEmojis = prepareMemoryEmojis(data);
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
