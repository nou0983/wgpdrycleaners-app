import {
  FormContainer,
  ProductsContainer,
  CartContent,
} from "../../components/index.component";
import { useCartContext } from "../../contexts/cartContext.context";
import { useFormContext } from "../../contexts/formContext.context";
import Wrapper from "./order.styles";

const Order = () => {
  const { cart, total, clearCart, toggleLoading } = useCartContext();
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
    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(order),
    }).then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
    });

    const data = await res.json();
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleLoading(true);

    try {
      const formValues = {
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
