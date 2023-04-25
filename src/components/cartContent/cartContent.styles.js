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
`;

export default Wrapper;
