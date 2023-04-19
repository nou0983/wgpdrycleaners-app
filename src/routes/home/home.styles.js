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
`;

export default Wrapper;
