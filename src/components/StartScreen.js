// Hooks
import { useEffect, useState } from "react";
import RotateLoader from "react-spinners/RotateLoader";
// Styled-components
import { StartScreenStyled } from "./styles/StartScreen.Styled";
// components
import Blob from "./Blob";

export default function StartScreen(props) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
    async function fetchSettings() {
      const res = await fetch("https://opentdb.com/api_category.php");
      const data = await res.json();
      return setCategories(data.trivia_categories);
    }
    fetchSettings();
  }, []);

  const categoryMenu = categories.map(category => [
    <option key={category.id} value={category.id}>
      {category.name}
    </option>,
  ]);

  return loading ? (
    <>
      <Blob />
      <RotateLoader color={"var(--clr-primary)"} loading={loading} size={15} />
    </>
  ) : (
    <StartScreenStyled>
      <Blob />
      <h1>Quizzical</h1>
      <h2>Test your knowledge</h2>
      <form onSubmit={props.event}>
        <label htmlFor={props.formData.questionNum}>Number of Questions</label>
        <input
          onChange={props.formUpdate}
          value={props.formData.questionNum}
          type="number"
          name="questionNum"
          id="questionNum"
        />
        <label htmlFor={props.formData.category}>Category</label>
        <select
          onChange={props.formUpdate}
          value={props.formData.category}
          name="category"
          id="category"
          required
        >
          <option value="">-- Choose a difficulty --</option>
          {categoryMenu}
        </select>
        <label htmlFor={props.formData.difficulty}>Difficulty</label>
        <select
          onChange={props.formUpdate}
          value={props.formData.difficulty}
          name="difficulty"
          id="difficulty"
          required
        >
          <option value="">-- Choose a category --</option>
          <option value="easy">Noob</option>
          <option value="medium">Intermediate</option>
          <option value="hard">Expert</option>
        </select>
        <button>Start quiz</button>
      </form>
    </StartScreenStyled>
  );
}
