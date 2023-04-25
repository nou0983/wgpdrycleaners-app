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
  }

  textarea.form-input::placeholder {
    text-transform: none;
  }
`;

export default Wrapper;
