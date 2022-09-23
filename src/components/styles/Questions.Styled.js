import styled from "styled-components";

export const QuestionsStyled = styled.main`
  max-width: 850px;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75em;
  }

  hr {
    border: 0.794239px solid #dbdef0;
    margin-block: 4em;
  }

  p {
    width: fit-content;
    border: 2px solid var(--clr-primary);
    border-radius: 50px;
    padding: 0.5em 1.5em;
    margin: 0;
    font-size: var(--fs-answers);
    font-weight: var(--fw-medium);
    color: var(--clr-primary);
    user-select: none;
    cursor: pointer;
  }

  p:hover {
    border: 3px solid var(--clr-primary) !important;
  }
`;
