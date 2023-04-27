import styled from "styled-components";
import img from "../../assets/imgs/hero-resized-min.jpg";

const Wrapper = styled.section`
  padding: 20rem 0;
  background: linear-gradient(
    to right bottom,
    rgba(57, 164, 247, 1),
    rgba(6, 85, 145, 1)
  );

  form {
    background: linear-gradient(
        rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0.95)
      ),
      url(${img}) center/cover;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
    padding: 10rem 7rem;
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
  }

  /* Large Phone to Tablet: 403px ~ 847px */
  @media only screen and (max-width: 847px) {
    form {
      padding: 10rem 4rem;
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
  }
`;

export default Wrapper;
