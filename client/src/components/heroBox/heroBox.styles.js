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

  /* *************************************** */
  /* Media Style */
  /* *************************************** */
  /* Default work done at 2560px */

  /* Extra Large 1729px ~ 1920px */
  @media only screen and (max-width: 1920px) {
  }

  /* Large laptop to Desktop: 1324px ~ 1728px */
  @media only screen and (max-width: 1728px) {
  }

  /* Large Tablet to Laptop: 848px ~ 1323px */
  @media only screen and (max-width: 1323px) {
  }

  /* Large Phone to Tablet: 403px ~ 847px */
  @media only screen and (max-width: 847px) {
    .heading-main {
      font-size: 4.5rem;
    }

    .heading-sub {
      font-size: 2rem;
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
  }
`;

export default Wrapper;
