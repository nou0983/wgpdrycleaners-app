import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import Wrapper from "./cartItem.styles";

const CartItem = ({ title, price, amount, removeItem, toggleAmount }) => {
  const decrement = () => {
    const newValue = amount - 1;

    if (newValue >= 0) {
      toggleAmount(title, newValue);
    }
     if (newValue === 0) {
      removeItem(title);
    }
  };

  const increment = () => {
    const newValue = amount + 1;
    toggleAmount(title, newValue);
  };

  return (
    <Wrapper className="flex-container">
      <p>{title}</p>
      <p>${price}</p>
      <p className="quantity-container">
        <button type="button" onClick={decrement}>
          <FaMinus />
        </button>
        <span>{amount}</span>
        <button type="button" onClick={increment}>
          <FaPlus />
        </button>
      </p>
      <p className="subtotal-container">
        ${price * amount}
        <button
          type="button"
          className="btn-delete"
          onClick={() => removeItem(title)}
        >
          <FaTrash />
        </button>
      </p>
    </Wrapper>
  );
};

export default CartItem;
