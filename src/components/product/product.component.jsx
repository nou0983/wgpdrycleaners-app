import { FaPlus, FaMinus } from "react-icons/fa";
import Wrapper from "./product.styles";

const Product = ({ title, price }) => {
  return (
    <Wrapper>
      <p>{title}</p>
      <p>${price}</p>
      <div className="input-container flex-container">
        <button type="button">
          <FaMinus />
        </button>
        <input type="number" name={title} min="0" />
        <button type="button">
          <FaPlus />
        </button>
      </div>
    </Wrapper>
  );
};
export default Product;
