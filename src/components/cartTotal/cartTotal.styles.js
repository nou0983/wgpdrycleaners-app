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
`;

export default Wrapper;
