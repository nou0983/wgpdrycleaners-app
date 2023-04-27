import styled from "styled-components";

const Wrapper = styled.li`
  align-items: center;
  text-transform: capitalize;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  p {
    flex-basis: 25%;
  }

  .quantity-container {
    gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: transparent;
    color: inherit;
  }

  .subtotal-container {
    text-align: right;
  }

  button.btn-delete {
    background-color: #bb2525;
    color: #fff;
    padding: 1rem;
    margin-left: 30%;
    border-radius: 3px;
    transition: 0.2s linear;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default Wrapper;
