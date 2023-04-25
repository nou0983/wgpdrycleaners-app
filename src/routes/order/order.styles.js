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
        rgba(255, 255, 255, 0.85),
        rgba(255, 255, 255, 0.85)
      ),
      url(${img}) center/cover;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
    padding: 10rem 7rem;
  }


`;

export default Wrapper;
