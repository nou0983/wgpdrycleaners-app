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
    margin-top: 2rem;
  }

  .input-container {
    margin-top: 2rem;
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
    flex-basis: 30%;
  }

  /* Large Phone to Tablet: 403px ~ 847px */
  @media only screen and (max-width: 847px) {
    flex-basis: 45%;
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
    flex-basis: 80%;
  }
`;

export default Wrapper;
