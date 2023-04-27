import styled from "styled-components";

const Wrapper = styled.span`
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 100px;
  border: 3px solid #ccc;
  border-top-color: #fff;
  animation: spinner 2s linear infinite;

  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Wrapper;
