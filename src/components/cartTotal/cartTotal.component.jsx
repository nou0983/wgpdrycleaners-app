import Wrapper from "./cartTotal.styles";

const CartTotal = ({ totalItems, total, shippingFee }) => {
  return (
    <Wrapper>
      <div className="cart-content">
        <p className="cart-items">
          <span className="cart__label">total items</span> {totalItems}
        </p>
        <p className="cart-sub-total">
          <span className="cart__label">subtotal</span>
          {total}
        </p>
        <p className="cart-shipping">
          <span className="cart-label">shipping fee</span>${shippingFee}
        </p>
        <p className="cart-total">
          <span className="cart-label">order total</span>${total + shippingFee}
        </p>
      </div>

      <p className="cart-order-label">Please make a bank transfer to finalise your order with your mobile number as your reference.</p>
      <p className="cart-order-label">Bank Account 06-0229-0305806-00</p>
      <button type="button" className="btn btn-blue">
        place order
      </button>
    </Wrapper>
  );
};
export default CartTotal;
