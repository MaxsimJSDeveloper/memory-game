import { useState } from "react";
import PlayField from "./modules/PlayField/PlayField";
import Button from "./ui/Button/Button";
import Container from "./ui/Container/Container";
import GameWrap from "./modules/GameWrap/GameWrap";
import GameStatus from "./components/GameStatus/GameStatus";
import { useGameCards } from "./hooks/useGameCards";
import { useScore } from "./hooks/useScore";

function App() {
  const [fieldSize, setFieldSize] = useState<number>(16);
  const [cardDelay, setCardDelay] = useState<number>(5);

  const { emojis, loadEmojis, loading, error, template, handleClick } =
    useGameCards(fieldSize, cardDelay);

  const score = useScore(emojis);
  return (
    <Container>
      <GameWrap
        fieldSize={setFieldSize}
        delay={cardDelay}
        changeDelay={setCardDelay}
        disabled={emojis.length > 0 || loading}
        score={score}
      />
      <PlayField
        emojis={emojis}
        template={template}
        handleClick={handleClick}
      />
      <Button onClick={loadEmojis} type="button">
        {emojis.length > 0 ? "Play again" : "Play"}
      </Button>
      <GameStatus emojis={emojis} loading={loading} error={error} />
    </Container>
  );
}

export default App;
