import { FaPlus, FaMinus } from "react-icons/fa";
import Wrapper from "./product.styles";
import { useEffect, useState } from "react";
import { useCartContext } from "../../contexts/cartContext.context";

const Product = ({ title, price }) => {
  const [quantity, setQuantity] = useState(0);
  const { cart, addToCart, removeItem } = useCartContext();

  useEffect(() => {
    if (quantity >= 1) {
      addToCart(title, price, quantity);
    } else if (quantity === 0) {
      removeItem(title);
    }
    // eslint-disable-next-line
  }, [quantity]);

  useEffect(() => {
    const checkExisting = cart.find((product) => product.title === title);

    if (!checkExisting) {
      setQuantity(0);
    } else {
      setQuantity(checkExisting.amount);
    }
    // eslint-disable-next-line
  }, [cart]);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);

    if (!isNaN(newValue)) {
      if (newValue >= 0) {
        setQuantity(parseInt(newValue));
      }
    }
  };

  const decrement = () => {
    const newValue = quantity - 1;

    if (newValue >= 0) {
      setQuantity(newValue);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Wrapper>
      <p>{title}</p>
      <p>${price}</p>
      <div className="input-container flex-container">
        <button type="button" onClick={decrement}>
          <FaMinus />
        </button>
        <input
          type="text"
          name={title}
          value={quantity}
          onChange={handleChange}
        />
        <button type="button" onClick={increment}>
          <FaPlus />
        </button>
      </div>
    </Wrapper>
  );
};
export default Product;
