import { Button } from "../index.component";
import Wrapper from "./card.styles";

const Card = ({ color, items, heading }) => {
  return (
    <Wrapper>
      <div className="card__side card__side--front">
        <div className={`card__img card__img--${color}`}></div>
        <h4 className={`card__heading card__heading--${color}`}>{heading}</h4>
        <ul className="card__list">
          {items.map((item, index) => {
            return <li key={index} className="card__item">{item}</li>
          })}          
        </ul>
      </div>
      <div className={`card__side card__side--back card__side--back-${color}`}>
        <h5 className="card__text">place your order</h5>
        <h6 className="card__price">now</h6>
        <Button color="white" text="place your order" href="#section-order" />
      </div>
    </Wrapper>
  );
};

export default Card;
