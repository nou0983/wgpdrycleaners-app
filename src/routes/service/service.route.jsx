import { Card } from "../../components/index.component";
import { priceList } from "../../utils/constants.js";
import Wrapper from "./service.styles";

const Service = () => {
  return (
    <Wrapper>
      <h2 className="heading-secondary">featured services</h2>
      <div className="container flex-container">
        {priceList.map((category, index) => {
          return <Card key={index} {...category} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Service;
