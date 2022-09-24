// Hooks
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import RotateLoader from "react-spinners/RotateLoader";
// Sytled-components
import { GameScreenStyled } from "./styles/GameScreen.Styled";
import { QuestionsStyled } from "./styles/Questions.Styled";
// Components
import Blob from "./Blob";
// assets
import restartIcon from "./assets/restart-alt-rounded.svg";

export default function GameScreen(props) {
  // States
  const [questions, setQuestions] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch Questions from API
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
    const category = props.formData.category;
    const difficulty = props.formData.difficulty;
    const quantity = props.formData.questionNum;
    async function fetchQuestions() {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&amount=${quantity}`
      );
      const data = await res.json();
      newQuestions(data.results);
    }
    fetchQuestions();
  }, [props.gameState]);

  // Fisher-Yates shuffle algorithm - Used in the next function to shuffles the returned array
  function shuffleAnswers(arr) {
    let newPos, temp;
    for (let i = arr.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      temp = arr[newPos];
      arr[newPos] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  // combines data.results.correct_answer
  // & data.results.incorrect_answers using concat and return as new array
  function concatAnswers(arr) {
    const mergedAnswerArrays = shuffleAnswers(
      [arr.correct_answer].concat(arr.incorrect_answers)
    );
    return mergedAnswerArrays;
  }

  // maps over the concatenated array and
  // adds { value, isSelected, id & isCorrectAnswer } to each answers
  function newQuestions(data) {
    setQuestions(
      data.map(items => {
        const expandedAnswers = concatAnswers(items).map(item => ({
          value: item,
          isSelected: false,
          id: nanoid(),
          isCorrectAnswer: item === items.correct_answer ? true : false,
        }));
        return {
          ...items,
          id: nanoid(),
          answers: expandedAnswers,
        };
      })
    );
  }

  // Sets correct background color on answers
  function colorLogic(item, arr) {
    if (gameEnded && item.isSelected && item.value === arr.correct_answer) {
      return "var(--clr-valid)";
    } else if (
      gameEnded &&
      item.isSelected &&
      item.value !== arr.correct_answer
    ) {
      return "var(--clr-invalid)";
    } else if (gameEnded && !item.isSelected) {
      return "transparent";
    } else if (!gameEnded && item.isSelected) {
      return "var(--clr-selection)";
    } else {
      return "transparent";
    }
  }

  // Highlights correct answer at the end of a game if your got it wrong.
  function correctAnswerShown(item, arr) {
    if (!gameEnded && !item.isSelected) {
      return "var(--clr-primary)";
    } else if (!gameEnded && item.isSelected) {
      return "var(--clr-bg)";
    } else if (
      gameEnded &&
      !item.isSelected &&
      item.value === arr.correct_answer
    ) {
      return "var(--clr-valid)";
    } else if (gameEnded && !item.isSelected) {
      return "var(--clr-primary)";
    } else if (gameEnded && item.isSelected) {
      return "var(--clr-bg)";
    }
  }

  // renders question's choices
  function getAnswerHtml(arr) {
    return arr.answers.map(answer => {
      let value = answer.value;
      return (
        <p
          key={answer.id}
          id={answer.id}
          onClick={() => selectAnswer(arr.id, answer.id)}
          style={{
            backgroundColor: colorLogic(answer, arr),
            borderColor: correctAnswerShown(answer, arr),
          }}
        >
          {value.substring(value.indexOf("&quot;") + 1)}
        </p>
      );
    });
  }

  function selectAnswer(Arr, id) {
    if (!gameEnded) {
      setQuestions(prevQuestions =>
        prevQuestions.map(items => {
          const updatedAnswers = items.answers.map(item => {
            return id === item.id
              ? { ...item, isSelected: !item.isSelected }
              : { ...item, isSelected: false };
          });
          return Arr === items.id
            ? {
                ...items,
                answers: updatedAnswers,
              }
            : { ...items };
        })
      );
    }
  }

  function checkAnswers() {
    setGameEnded(true);
    if (!gameEnded) {
      questions.map(question =>
        question.answers.forEach(item => {
          if (item.isSelected && item.isCorrectAnswer) {
            return setScore(prevScore => prevScore + 1);
          }
        })
      );
    }
  }

  const questionsHtml = questions.map(question => {
    return (
      <QuestionsStyled key={question.id}>
        <h3>
          {question.question
            .replaceAll("&quot;", '"')
            .replaceAll("&#039;", "'")
            .replaceAll("&sup2;", "")
            .replaceAll("Pok&eacute;", "Poke")}
        </h3>
        <div>{getAnswerHtml(question)}</div>
        <hr />
      </QuestionsStyled>
    );
  });
  return loading ? (
    <>
      <Blob />
      <RotateLoader color={"var(--clr-primary)"} loading={loading} size={15} />
    </>
  ) : (
    <GameScreenStyled>
      <Blob />
      {questionsHtml}
      <div className="container">
        <p className="score">
          You scored {gameEnded ? score : `_`} / {props.formData.questionNum}{" "}
          correct answers
        </p>

        <button className="check-btn" onClick={checkAnswers}>
          Check answers
        </button>
        <button className="restart-btn" onClick={props.restartGame}>
          <img src={restartIcon} alt="reset icon" />
        </button>
      </div>
    </GameScreenStyled>
  );
}
