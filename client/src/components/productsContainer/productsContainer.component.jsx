import { useState } from "react";
import { products } from "../../utils/constants";
import Product from "../product/product.component";
import Wrapper from "./productsContainer.styles";

const ProductsContainer = () => {
  const categories = products.map((product) => product.category);
  const [currentProduct, setCurrentProduct] = useState("trouser");

  return (
    <Wrapper>
      <div className="flex-container">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`btn btn-white ${
              category === currentProduct ? "btn-blue" : ""
            }`}
            onClick={() => setCurrentProduct(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <ul className="products-list">
        {products
          .filter((product) => product.category === currentProduct)[0]
          .products.map((product) => {
            return <Product key={product.title} {...product} />;
          })}
      </ul>
    </Wrapper>
  );
};

export default ProductsContainer;
