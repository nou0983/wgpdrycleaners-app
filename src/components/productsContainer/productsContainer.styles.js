import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10rem;

  & > div.flex-container {
    justify-content: space-around;
    margin-bottom: 3rem;
  }

  button.btn {
    padding: 2rem 3rem;
  }

  button.btn:hover {
    color: #fff;
    background-color: #0984e3;
  }

  ul.products-list {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem 4%;
  }
`;

export default Wrapper;
