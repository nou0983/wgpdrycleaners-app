import styled from "styled-components";

const Wrapper = styled.section`
  padding: 30rem 0 20rem;
  margin-top: -15vh;
  background-color: #f7f7f7;

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
    margin-top: 0;
    padding-top: 18rem;

    div.container {
      flex-direction: column;
      row-gap: 5rem;
      align-items: center;
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
  }
`;

export default Wrapper;
