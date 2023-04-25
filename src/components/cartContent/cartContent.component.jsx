import { useCartContext } from "../../contexts/cartContext.context";
import { CartTotal, InfoContainer, CartItem } from "../index.component";
import Wrapper from "./cartContent.styles";

const CartContent = () => {
  const {
    cart,
    total,
    totalItems,
    shippingFee,
    isLoading,
    clearCart,
    removeItem,
    toggleAmount,
  } = useCartContext();

  return (
    <Wrapper>
      <div className="cart-header flex-container">
        <span>item</span>
        <span>price</span>
        <span>quantity</span>
        <span>subtotal</span>
      </div>
      <ul className="cart-body">
        {cart.length < 1 ? (
          <li key="empty" className="cart-text">
            your cart is empty
          </li>
        ) : (
          cart.map((product) => (
            <CartItem
              key={product.title}
              {...product}
              removeItem={removeItem}
              toggleAmount={toggleAmount}
            />
          ))
        )}
      </ul>
      <div className="cart-footer">
        <button type="button" className="btn btn-blue" onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <CartTotal
        total={total}
        totalItems={totalItems}
        shippingFee={shippingFee}
        isLoading={isLoading}
      />
      <InfoContainer />
    </Wrapper>
  );
};

export default CartContent;
