import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10rem;

  & > div.flex-container {
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 1.5rem;
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

  /* *************************************** */
  /* Media Style */
  /* *************************************** */
  /* Default work done at 2560px */

  /* Extra Large 1729px ~ 1920px */
  @media only screen and (max-width: 1920px) {
  }

  /* Large laptop to Desktop: 1324px ~ 1728px */
  @media only screen and (max-width: 1728px) {
    & > div.flex-container {
      justify-content: space-between;
    }
  }

  /* Large Tablet to Laptop: 848px ~ 1323px */
  @media only screen and (max-width: 1323px) {
    ul.products-list {
      column-gap: 5%;
    }
  }

  /* Large Phone to Tablet: 403px ~ 847px */
  @media only screen and (max-width: 847px) {
    ul.products-list {
      column-gap: 10%;
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
    ul.products-list {     
      justify-content: center;
    }
  }
`;

export default Wrapper;
