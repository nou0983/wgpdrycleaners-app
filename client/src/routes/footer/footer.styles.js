import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: #333;
  padding: 10rem 0;

  .image-container {
    text-align: center;
  }

  img {
    width: 7rem;
  }

  .flex-container {
    margin-top: 5rem;
  }

  .info-container {
    flex-basis: 40%;
    border-top: solid 1px #777;
    padding-top: 2rem;
    font-size: 1.4rem;
  }

  h3 {
    color: #fff;
    text-transform: capitalize;
  }

  h3:last-of-type {
    margin-top: 2rem;
  }

  p {
    line-height: 1.7;
  }
`;

export default Wrapper;
