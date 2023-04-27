import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  margin-left: auto;
  border: 1px solid #ccc;
  padding: 2rem 3rem;
  border-radius: 3px;

  .cart-content {
    text-transform: capitalize;
    font-size: 1.7rem;

    > *:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }

  .cart-total {
    border-top: 1px solid #ccc;
    padding-top: 2rem;
    margin-bottom: 4rem;
    font-size: 2.2rem;
  }

  .cart-order-label {
    font-size: 1.5rem;
  }

  .btn {
    margin-top: 1.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .btn:disabled {
    opacity: 0.8;
    cursor: auto;
  }

  .alert-success {
    font-size: 1.6rem;
    margin-top: 1rem;
  }

  .alert-heading {
    font-size: 2rem;
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
    width: 65%;
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
    width: 80%;
  }
`;

export default Wrapper;
