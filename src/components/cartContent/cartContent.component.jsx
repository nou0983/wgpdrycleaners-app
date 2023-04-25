import { CartTotal, InfoContainer } from "../index.component";
// import { useCartContext } from "../../contexts/cartContext.context";
import Wrapper from "./cartContent.styles";

const CartContent = () => {
  const cart = [];

  return (
    <Wrapper>
      <div className="cart-header flex-container">
        <span>item</span>
        <span>price</span>
        <span>quantity</span>
        <span>subtotal</span>
      </div>
      <div className="cart-body">
        {cart.length < 1 ? (
          <p className="cart-text">your cart is empty</p>
        ) : (
          // cart.map((item) => <CartItem key={item.id} {...item} />)
          <div>cartItem</div>
        )}
      </div>
      <div className="cart-footer">
        <button type="button" className="btn btn-blue">
          clear shopping cart
        </button>
      </div>
      <CartTotal total="0" totalItems="0" shippingFee="0" />
      <InfoContainer />
    </Wrapper>
  );
};
export default CartContent;
