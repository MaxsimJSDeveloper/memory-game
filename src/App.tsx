import { useState } from "react";
import PlayField from "./modules/PlayField/PlayField";
import Button from "./ui/Button/Button";
import Container from "./ui/Container/Container";
import GameStatus from "./components/GameStatus/GameStatus";
import { useGameCards } from "./hooks/useGameCards";
import { useScore } from "./hooks/useScore";
import Modal from "./ui/Modal/Modal";
import GameHeader from "./components/GameHeader/GameHeader";
import GameSettings from "./modules/GameSettings/GameSettings";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

function App() {
  const [fieldSize, setFieldSize] = useState<number>(16);
  const [cardDelay, setCardDelay] = useState<number>(5);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { emojis, loadEmojis, loading, error, template, handleClick } =
    useGameCards(fieldSize, cardDelay);

  const score = useScore(emojis);

  return (
    <Container>
      <Helmet>
        <title>Memory Game | Train Your Brain & Focus</title>
        <meta
          name="description"
          content="A fun and challenging memory game to improve your focus and cognitive skills. Match the pairs and test your brain. Play for free online!"
        />
      </Helmet>
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
        <GameSettings
          fieldSize={setFieldSize}
          delay={cardDelay}
          changeDelay={setCardDelay}
          disabled={emojis.length > 0 || loading}
        />
      </Modal>
      <ToastContainer position="bottom-right" />
      <GameStatus loading={loading} error={error} />
    </Container>
  );
}

export default App;
