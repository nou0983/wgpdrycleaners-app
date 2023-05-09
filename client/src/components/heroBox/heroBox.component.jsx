import { Button } from "../index.component";
import Wrapper from "./heroBox.styles";

const HeroBox = () => {
  return (
    <Wrapper>
      <h1>
        <span className="heading-main">convenient service</span>
        <br />
        <span className="heading-sub">at your door step</span>
      </h1>
      <Button color="white" text="place your order" href="#section-order" />
      <h2>agency</h2>
      <p>- grand drive laundromat, 9 / 70 grand drive, orewa</p>
      <p>- 8 moana avenue, orewa</p>
    </Wrapper>
  );
};

export default HeroBox;
