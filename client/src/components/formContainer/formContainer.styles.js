import styled from "styled-components";

const Wrapper = styled.div`
  .form-row {
    margin-bottom: 4rem;
  }

  .form-row:last-of-type {
    align-items: flex-start;
  }

  .form-container,
  select,
  textarea {
    flex-basis: 45%;
    position: relative;
  }

  .form-input {
    color: #777;
    width: 100%;
    border: none;
    padding: 2rem;
    font-size: 1.7rem;
    border-radius: 3px;
    border-bottom: 3px solid transparent;
    outline: none;
  }

  .form-input:focus {
    box-shadow: 0 5px 30px #ccc;
  }

  .form-input:focus:invalid {
    border-bottom-color: #ff7730;
  }

  .form-input:focus:valid {
    border-bottom-color: #0984e3;
  }

  .form-input::placeholder,
  .form-label {
    text-transform: capitalize;
    color: #aaa;
  }

  .form-input:placeholder-shown + .form-label {
    transform: translateY(0);
    opacity: 0;
  }

  .form-label {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 1.7rem;
    transform: translateY(250%);
    transition: 0.2s linear;
  }

  select {
    text-transform: capitalize;
  }

  textarea {
    height: 20rem;
    font-family: inherit;
  }

  textarea.form-input::placeholder {
    text-transform: none;
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
    .form-row {
      flex-direction: column;
      row-gap: 2rem;
    }

    textarea {
      flex-basis: 20rem;
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
  }
`;

export default Wrapper;
