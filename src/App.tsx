import { useState } from "react";
import PlayField from "./modules/PlayField/PlayField";
import Button from "./ui/Button/Button";
import { Emoji } from "./ts/types";
import { fetchEmoji } from "./api/emoji";
import { prepareMemoryEmojis } from "./utils/dataTransformers";
import Container from "./ui/Container/Container";

function App() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      {emojis.length === 0 && <p>Click on button for start play</p>}
      <PlayField emojis={emojis} />
      <Button onClick={loadEmojis} type="button">
        Play
      </Button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </Container>
  );
}

export default App;
