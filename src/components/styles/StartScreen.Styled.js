import styled from "styled-components";
import chevronDown from "../assets/chevron-down.svg";

export const StartScreenStyled = styled.div`
  text-align: center;

  > * {
    margin: 0;
  }

  h1 {
    margin-bottom: 0.125em;
  }

  h2 {
    margin-bottom: 2em;
  }

  form {
    background-color: #ffffff90;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
  }

  form > * {
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
  }

  form > select:nth-last-of-type(1) {
    margin-bottom: 4em;
  }

  label {
    position: relative;
    margin: 0 0 0.5em;
  }

  label:not(:nth-child(1))::after {
    position: absolute;
    content: "*";
    color: red;
    right: 42%;
    font-size: 1.5rem;
  }

  @media (min-width: 380px) {
    label:not(:nth-child(1))::after {
      right: 58%;
    }
  }

  @media (min-width: 480px) {
    label:not(:nth-child(1))::after {
      right: 67%;
    }
  }

  select,
  input {
    border: 2px solid #29326496;
    padding: 1em 1.25em;
    border-radius: 12px;
    background-color: transparent;
  }

  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-image: url(${chevronDown});
    background-repeat: no-repeat;
    background-position: calc(100% - 1.25em) center;
  }

  select:focus:invalid,
  select:invalid {
    border: 3px solid var(--clr-invalid);
  }

  select:focus:valid,
  select:valid {
    border: 3px solid var(--clr-valid);
  }

  select:focus {
    outline: 3px solid var(--clr-primary);
    outline-offset: 3px;
  }

  option {
    background-color: var(--clr-bg);
  }

  button {
    text-align: center;
    margin-bottom: 0;
  }
`;
