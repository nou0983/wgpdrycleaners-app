import styled from "styled-components";
import bgImg from "../../assets/imgs/hero-resized-min.jpg";

const Wrapper = styled.section`
  background: linear-gradient(
      to right bottom,
      rgba(57, 164, 247, 0.8),
      rgba(6, 85, 145, 0.8)
    ),
    url(${bgImg}) center/cover;
  height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);

  img {
    width: 24rem;
    margin: 3rem 0 0 3rem;
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
    clip-path: none;
    height: 90vh;
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
  }
`;

export default Wrapper;
