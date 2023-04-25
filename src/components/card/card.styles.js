import styled from "styled-components";
import img1 from "../../assets/imgs/hero-small-min.jpg";
import img2 from "../../assets/imgs/pickup-delivery-min.jpg";
import img3 from "../../assets/imgs/formal-wear-min.jpg";

const Wrapper = styled.div`
  flex-basis: 25%;
  height: 45rem;
  border-radius: 2px;
  position: relative;
  perspective: 1000px;

  &:hover .card__side--front {
    transform: rotateY(180deg);
  }

  &:hover .card__side--back {
    transform: rotateY(0);
    z-index: 1;
  }

  .card__side {
    height: 100%;
    border-radius: 2px;
    backface-visibility: hidden;
    transition: 0.5s linear;
    box-shadow: 0 5px 30px #ccc;
  }

  .card__side--front {
    position: relative;
    background-color: #fff;
  }

  .card__side--back {
    z-index: -1;
    text-transform: uppercase;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #fff;
    transform: rotateY(-180deg);
  }

  .card__side--back-orange {
    background: linear-gradient(to right bottom, #ffb900, #ff7730);
  }

  .card__side--back-green {
    background: linear-gradient(to right bottom, #7ed56f, #28b485);
  }

  .card__side--back-blue {
    background: linear-gradient(to right bottom, #39a4f7, #065591);
  }

  .card__img {
    height: 40%;
    border-radius: 2px 2px 0 0;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  }

  .card__img--orange {
    background: linear-gradient(
        to right bottom,
        rgba(255, 185, 0, 0.8),
        rgba(255, 119, 48, 0.8)
      ),
      url(${img1}) center/cover;
  }

  .card__img--green {
    background: linear-gradient(
        to right bottom,
        rgba(126, 213, 111, 0.8),
        rgba(40, 180, 133, 0.8)
      ),
      url(${img2}) center/cover;
  }

  .card__img--blue {
    background: linear-gradient(
        to right bottom,
        rgba(42, 151, 255, 0.8),
        rgba(86, 68, 250, 0.8)
      ),
      url(${img3}) center/cover;
  }

  .card__heading {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 300;
    padding: 1.5rem;
    position: absolute;
    top: 26%;
    right: 2%;
    color: #fff;
  }

  .card__heading--orange {
    background-color: rgba(253, 122, 15, 0.6);
  }

  .card__heading--green {
    background-color: rgba(85, 197, 126, 0.6);
  }

  .card__heading--blue {
    background-color: rgba(64, 109, 252, 0.6);
  }

  .card__list {
    list-style: none;
    height: 60%;
    padding: 2.5rem 3rem;
    font-size: 1.3rem;
    text-align: center;
  }

  .card__item:not(:last-of-type) {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1.5px solid #f7f7f7;
  }

  .card__text {
    font-weight: 400;
  }

  .card__price {
    font-size: 6rem;
    font-weight: 100;
    margin: 1rem 0 8rem;
  }
`;

export default Wrapper;
