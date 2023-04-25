
import { Spinner } from "../index.component";
import Wrapper from "./cartTotal.styles";

const CartTotal = ({ totalItems, total, shippingFee, isLoading }) => {
  return (
    <Wrapper>
      <div className="cart-content">
        <p className="cart-items">
          <span className="cart__label">total items</span> {totalItems}
        </p>
        <p className="cart-sub-total">
          <span className="cart__label">subtotal</span> ${total.toFixed(2)}
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
    </Wrapper>
  );
};

export default CartTotal;
