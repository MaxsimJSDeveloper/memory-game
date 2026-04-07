import { useState } from "react";
import Container from "./ui/Container/Container";
import GameStatus from "./components/GameStatus/GameStatus";
import { useGameCards } from "./hooks/useGameCards";
import { useScore } from "./hooks/useScore";
import Modal from "./ui/Modal/Modal";
import GameHeader from "./components/GameHeader/GameHeader";
import GameSettings from "./modules/GameSettings/GameSettings";
import EmojiList from "./modules/EmojiList/EmojiList"; // Використовуємо напряму

import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import GameControls from "./components/GameControls/GameControls";
import { useAttractMode } from "./hooks/useAttractMode";

function App() {
  const [fieldSize, setFieldSize] = useState<number>(16);
  const [cardDelay, setCardDelay] = useState<number>(5);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { emojis, startGame, loading, error, handleClick, stopGame, isPreviewing } =
    useGameCards(fieldSize, cardDelay);

  // Визначаємо, чи активна зараз реальна гра
  const isGameActive = emojis.length > 0;

  // Підключаємо наш демо-режим. Він активний ТІЛЬКИ коли немає реальної гри
  const demoCards = useAttractMode(fieldSize, !isGameActive);

  const { score, isWon } = useScore(emojis);

  const activeCards = isGameActive ? emojis : demoCards;

  return (
    <Container>
      <Helmet>
        <title>Memory Game | Train Your Brain & Focus</title>
      </Helmet>

      <GameHeader
        isGameActive={isGameActive}
        isPreviewing={isPreviewing}
        isWon={isWon}
        score={score}
        onSettingsClick={() => setIsOpen(true)}
      />

      <EmojiList
        emojis={activeCards}
        fieldSize={fieldSize}
        handleClick={handleClick}
      />

      <GameControls
        isPlaying={emojis.length > 0}
        onStart={startGame}
        onStop={stopGame}
      />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <GameSettings
          fieldSize={setFieldSize}
          delay={cardDelay}
          changeDelay={setCardDelay}
          disabled={emojis.length > 0 || loading}
        />
      </Modal>

      <ToastContainer position="bottom-right" theme="dark" />
      <GameStatus loading={loading} error={error} />
    </Container>
  );
}

export default App;
