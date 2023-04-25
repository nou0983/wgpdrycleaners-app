import styled from "styled-components";

export const CONSTANTS = {
  // COLORS
  colorPrimary: "#0984e3",
  colorPrimaryLight: "#39a4f7",
  colorPrimaryDark: "#065591",
};

const Wrapper = styled.main`
  padding: 2rem;

  button {
    border: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  .container {
    width: 70%;
    max-width: 1500px;
    margin: auto;
  }

  .flex-container {
    display: flex;
    justify-content: space-between;
  }

  .btn-container {
    text-align: center;
  }

  .btn {
    font-size: inherit;
    font-family: inherit;
    padding: 2.5rem 5rem;
    border-radius: 50px;
    position: relative;
    z-index: 1;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s linear;
  }

  .btn-animated::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50px;
    z-index: -1;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s linear;
  }

  .btn-animated:hover {
    box-shadow: 0 6px 15px rgba(119, 119, 119, 0.6);
    transform: translateY(-2px);
  }

  .btn-animated:hover::before {
    transform: scale(1.7);
    opacity: 0;
  }

  .btn-white {
    color: #777;
    background-color: #fff;
  }

  .btn-white::before {
    background-color: #fff;
  }

  .btn-blue {
    border: none;
    background-color: #0984e3;
    color: #fff;
  }

  .btn-blue::before {
    background-color: #0984e3;
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
