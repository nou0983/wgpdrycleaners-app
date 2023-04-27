import styled from "styled-components";

const Wrapper = styled.article`
  width: 70%;
  margin: 10rem auto 0;

  .cart-header {
    text-transform: capitalize;
    padding-bottom: 1rem;
    text-align: center;

    span {
      flex-basis: 25%;
    }
  }

  .cart-body {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 4rem 0;
    text-align: center;
  }

  .cart-text {
    text-transform: capitalize;
  }

  .cart-footer {
    padding-top: 2rem;
    margin-bottom: 3rem;
    text-align: right;

    button.btn {
      background-color: #bb2525;
    }
  }

  button.btn {
    padding: 2rem 3rem;
  }

  button.btn:hover {
    opacity: 0.8;
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
    width: 80%;
  }

  /* Large Phone to Tablet: 403px ~ 847px */
  @media only screen and (max-width: 847px) {
    width: 100%;
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
  }
`;

export default Wrapper;
