import {
  FormContainer,
  ProductsContainer,
  CartContent,
} from "../../components/index.component";
import Wrapper from "./order.styles";

const Order = () => {
  return (
    <Wrapper id="section-order">
      <form className="container">
        <h2 className="heading-secondary">start booking now</h2>
        <FormContainer />
        <ProductsContainer />
        <CartContent />
      </form>
    </Wrapper>
  );
};

export default Order;
