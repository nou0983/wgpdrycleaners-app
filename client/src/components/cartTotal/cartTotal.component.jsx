import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Spinner } from "../index.component";
import Wrapper from "./cartTotal.styles";
import { useCartContext } from "../../contexts/cartContext.context";

const CartTotal = ({ totalItems, total, shippingFee, isLoading }) => {
  const { showAlert, delivery } = useCartContext();

  return (
    <Wrapper>
      <div className="cart-content">
        <p className="cart-items">
          <span className="cart__label">total items</span> {totalItems}
        </p>
        <p className="cart-sub-total">
          <span className="cart__label">subtotal </span> ${total.toFixed(2)}{" "}
          {delivery !== "" && delivery !== "standard (72hrs)"
            ? "(express service included)"
            : ""}
        </p>
        <p className="cart-shipping">
          <span className="cart-label">shipping fee</span> ${shippingFee}
        </p>
        <p className="cart-total">
          <span className="cart-label">order total</span> $
          {(total + shippingFee).toFixed(2)}
        </p>
      </div>
      <p className="cart-order-label">Bank Account 06-0229-0305806-00</p>
      <button type="submit" className="btn btn-blue" disabled={isLoading}>
        {isLoading && <Spinner />} place order
      </button>
      {showAlert && (
        <Alert severity="success" className="alert-success">
          <AlertTitle className="alert-heading">
            Thank you for your order!
          </AlertTitle>
          The confirmation email will be sent to your email provided above
          shortly.
        </Alert>
      )}
    </Wrapper>
  );
};

export default CartTotal;
