import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 25vh;
  text-align: center;
  color: #fff;

  h1 {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2rem;
    margin-bottom: 3.5rem;
  }

  .heading-main {
    display: inline-block;
    font-size: 6rem;
    margin-bottom: 1rem;
  }

  .heading-sub {
    font-size: 3rem;
  }

  a {
    animation: beat 2s linear infinite;
  }

  @keyframes beat {
    50% {
      transform: scale(1.05);
    }

    100% {
      transform: scale(1);
    }
  }

  h2 {
    font-weight: 400;
    margin-top: 3.5rem;
  }

  h2,
  p {
    text-transform: capitalize;
    letter-spacing: 0.5rem;
    font-size: 1.5rem;
  }

  p {
    margin-top: 2rem;
  }
`;

export default Wrapper;
