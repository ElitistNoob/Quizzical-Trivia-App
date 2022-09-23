import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 4em 2em;
    background-color: var(--clr-bg);
  }

  :root {
    /* Font Sizes */

    --fs-h1: 4rem;
    --fs-subtitle: 1.25rem;
    --fs-h3: 1.75rem;
    --fs-body: 1.25rem;
    --fs-answers: 1rem;

    /* Font Weights */

    --fw-normal: 400;
    --fw-medium: 500;
    --fw-semi: 600;
    --fw-bold: 700;

    /* Colors */

    --clr-primary: #293264;
    --clr-accent: #FFFAD1;
    --clr-bg: #F5F7FB;
    --clr-correct: #94D7A2;
    --clr-valid: #94D7A2;
    --clr-invalid: #F8BCBC;
    --clr-light: #F5F7FB;
    --clr-selection: #D6DBF5;
  }

  /* Typography */

  h1,
  h3 {
    font-family: "Karla", sans-serif;
    font-weight: var(--fw-bold);
    color: var(--clr-primary);
  }

  h1 {
    font-size: var(--fs-h1);
  }

  h2 {
    font-weight: var(--fw-normal);
    font-size: var(--fs-subtitle);
    color: var(--clr-primary);
  }

  h3 {
    font-size: var(--fs-h3);
    line-height: 1.4;
  }


  button {
    background-color: var(--clr-primary);
    color: var(--clr-light);
    font-size: var(--fs-body);
    padding: 1em 2em;
    border-radius: 50px;
    border: none;
    cursor: pointer;
  }

  label {
    font-weight: var(--fw-bold);
    color: var(--clr-primary);
    letter-spacing: 0.05em;
    opacity: 0.6;
  }

  /* Images */

  img {
    max-width: 100%; 
  }
`;
