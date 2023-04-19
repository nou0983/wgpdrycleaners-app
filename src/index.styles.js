import styled from "styled-components";

export const CONSTANTS = {
  // COLORS
  colorPrimary: "#0984e3",
  colorPrimaryLight: "#39a4f7",
  colorPrimaryDark: "#065591",
};

const Wrapper = styled.main`
  padding: 2rem;

  .container {
    width: 70%;
    max-width: 1500px;
    margin: auto;
  }

  .flex-container {
    display: flex;
    justify-content: space-between;
  }

  .heading-secondary {
    text-transform: uppercase;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 8rem;
    letter-spacing: 0.2rem;
    background-image: linear-gradient(
      120deg,
      ${CONSTANTS.colorPrimaryLight},
      ${CONSTANTS.colorPrimaryDark}
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export default Wrapper;
