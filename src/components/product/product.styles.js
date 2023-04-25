import styled from "styled-components";

const Wrapper = styled.li`
  flex-basis: 22%;
  background-color: #fff;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  text-transform: capitalize;

  p:nth-of-type(2) {
    margin: 2rem 0;
  }

  button {
    padding: 1.5rem;
    color: inherit;
    cursor: pointer;
  }

  input {
    border: none;
    width: 50%;
    text-align: center;
    font-size: 1.6rem;
  }
`;

export default Wrapper;
