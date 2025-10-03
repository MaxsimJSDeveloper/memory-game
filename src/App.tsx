import { useState } from "react";
import PlayField from "./modules/PlayField/PlayField";
import Button from "./ui/Button/Button";
import Container from "./ui/Container/Container";
import GameWrap from "./modules/GameWrap/GameWrap";
import GameStatus from "./components/GameStatus/GameStatus";
import { useGameCards } from "./hooks/useGameCards";
import { useScore } from "./hooks/useScore";
import Modal from "./ui/Modal/Modal";
import GameHeader from "./components/GameHeader/GameHeader";

function App() {
  const [fieldSize, setFieldSize] = useState<number>(16);
  const [cardDelay, setCardDelay] = useState<number>(5);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { emojis, loadEmojis, loading, error, template, handleClick } =
    useGameCards(fieldSize, cardDelay);

  const score = useScore(emojis);

  return (
    <Container>
      <GameHeader score={score} onSettingsClick={() => setIsOpen(true)} />
      <PlayField
        emojis={emojis}
        template={template}
        handleClick={handleClick}
      />
      <Button onClick={loadEmojis} type="button">
        {emojis.length > 0 ? "Play again" : "Play"}
      </Button>
      {emojis.length === 0 && <p>Click on button for start play</p>}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <GameWrap
          fieldSize={setFieldSize}
          delay={cardDelay}
          changeDelay={setCardDelay}
          disabled={emojis.length > 0 || loading}
        />
      </Modal>

      <GameStatus loading={loading} error={error} />
    </Container>
  );
}

export default App;
