import {
  FormContainer,
  ProductsContainer,
  CartContent,
} from "../../components/index.component";
import { useCartContext } from "../../contexts/cartContext.context";
import { useFormContext } from "../../contexts/formContext.context";
import axios from "axios";
import Wrapper from "./order.styles";

const Order = () => {
  const {
    totalItems,
    shippingFee,
    cart,
    total,
    resetCart,
    clearCart,
    toggleLoading,
    toggleAlert,
  } = useCartContext();
  const {
    firstName,
    lastName,
    mobile,
    email,
    address,
    suburb,
    request,
    delivery,
    clearValues,
  } = useFormContext();

  const fetchOrder = async (order) => {
    const res = await axios.post("/api/email", order);
    return res;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleLoading(true);

    try {
      const formValues = {
        totalItems,
        shippingFee,
        cart,
        total,
        firstName,
        lastName,
        mobile,
        email,
        address,
        suburb,
        request,
        delivery,
      };

      fetchOrder(formValues);
      toggleAlert(true);
      resetCart();
      clearCart();
      clearValues();
    } catch (error) {
      console.log(error);
    }

    toggleLoading(false);
  };

  return (
    <Wrapper id="section-order">
      <form className="container" onSubmit={handleSubmit}>
        <h2 className="heading-secondary">start booking now</h2>
        <FormContainer />
        <ProductsContainer />
        <CartContent />
      </form>
    </Wrapper>
  );
};

export default Order;
