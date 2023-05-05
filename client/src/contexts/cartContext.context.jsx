import { createContext, useContext, useReducer, useEffect } from "react";
import {
  INITIAL_CART_STATE,
  CART_ACTION_TYPE,
  cartReducer,
} from "../reducers/cartReducer.reducer";
import { createAction } from "../utils/createAction";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);
  const { cart, delivery, showAlert } = state;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setTotal();
    // eslint-disable-next-line
  }, [cart]);

  useEffect(() => {
    setTotal();
    // eslint-disable-next-line
  }, [delivery]);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => toggleAlert(false), 5000);
    }
  }, [showAlert]);

  const addToCart = (title, price, amount) => {
    const checkExisting = cart.find((product) => product.title === title);
    let payload;

    if (checkExisting) {
      payload = cart.map((product) => {
        if (product.title === title) {
          return { ...product, amount };
        }
        return product;
      });
    } else {
      const newItem = {
        title,
        price,
        amount,
      };
      payload = [...cart, newItem];
    }

    dispatch(createAction(CART_ACTION_TYPE.ADD_TO_CART, payload));
  };

  const removeItem = (title) => {
    const payload = cart.filter((product) => {
      return product.title !== title;
    });
    dispatch(createAction(CART_ACTION_TYPE.REMOVE_ITEM, payload));
  };

  const clearCart = () => {
    dispatch(createAction(CART_ACTION_TYPE.CLEAR_CART));
  };

  const resetCart = () => {
    dispatch(createAction(CART_ACTION_TYPE.RESET_CART));
  }

  const toggleAmount = (title, newAmount) => {
    const payload = cart.map((product) => {
      if (product.title === title) {
        return { ...product, amount: newAmount };
      }
      return product;
    });
    dispatch(createAction(CART_ACTION_TYPE.TOGGLE_AMOUNT, payload));
  };

  const setTotal = () => {
    const payload = cart.reduce(
      (acc, item) => {
        acc.newTotal = acc.newTotal + item.amount * item.price;
        acc.newAmount = acc.newAmount + item.amount;
        return acc;
      },
      {
        newTotal: 0,
        newAmount: 0,
        newShipping: 10,
      }
    );

    if (delivery === "express (48hrs)") {
      payload.newTotal = payload.newTotal * 1.2;
    } else if (delivery === "super express (24hrs)") {
      payload.newTotal = payload.newTotal * 1.3;
    }

    if (payload.newTotal >= 50) {
      payload.newShipping = 0;
    }

    dispatch(createAction(CART_ACTION_TYPE.SET_TOTAL, payload));
  };

  const toggleLoading = (bool) => {
    dispatch(createAction(CART_ACTION_TYPE.TOGGLE_ISLOADING, bool));
  };

  const toggleAlert = (bool) => {
    dispatch(createAction(CART_ACTION_TYPE.TOGGLE_ALERT, bool));
  };

  const setDelivery = (type) => {
    dispatch(createAction(CART_ACTION_TYPE.SET_DELIVERY, type));
  };

  const value = {
    ...state,
    addToCart,
    removeItem,
    clearCart,
    resetCart,
    toggleAmount,
    setTotal,
    toggleLoading,
    setDelivery,
    toggleAlert,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
