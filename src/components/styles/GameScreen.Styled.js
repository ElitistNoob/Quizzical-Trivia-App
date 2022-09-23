import styled from "styled-components";

export const GameScreenStyled = styled.section`
  .container {
    display: grid;
    grid-template-columns: 1fr max-content 75px;
    grid-template-areas: "results check reset";
    gap: 1em;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 840px) {
    .container {
      grid-template-columns: 1fr 75px;
      grid-template-areas:
        "check reset"
        "results results";
    }
  }

  .score {
    grid-area: results;
    color: var(--clr-primary);
    font-size: var(--fs-subtitle);
    font-weight: var(--fw-bold);
    background-color: #ffffff;
    padding: 1em 2em;
    border-radius: 50px;
    margin: 0;
    border: 3px solid var(--clr-primary);
    text-align: center;
  }

  .check-btn {
    grid-area: check;
    margin-inline: auto 0;
    width: 100%;
  }

  .restart-btn {
    grid-area: reset;
    border-radius: 50%;
    padding: 1em;
    background-color: var(--clr-selection);
    color: var(--clr-primary);
  }
`;
