// Hooks
import { useState } from "react";
import { Helmet } from "react-helmet";
// Styled-Components
import { GlobalStyle } from "./components/styles/GlobalStyle";
// Components
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";

function App() {
  // State to check if game is started or not
  const [gameState, setGameState] = useState(false);
  // // State for form input
  const [formData, setFormData] = useState({
    category: "",
    difficulty: "",
    questionNum: 5,
  });

  // fetches categories from open trivia API and stores in Categories

  function formUpdate(event) {
    const { name, value, type } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "number" ? parseInt(value, 10) : value,
    }));
  }

  function startGame() {
    setGameState(true);
  }

  function restartGame() {
    setGameState(false);
  }

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico"></link>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quizzical Trivia App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Karla:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      {!gameState ? (
        <StartScreen
          event={startGame}
          formUpdate={formUpdate}
          formData={formData}
        />
      ) : (
        <GameScreen
          gameState={gameState}
          restartGame={restartGame}
          formData={formData}
        />
      )}
    </>
  );
}

export default App;
