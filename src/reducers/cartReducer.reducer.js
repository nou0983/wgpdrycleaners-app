const getLocalStorage = () => {
  const cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(cart);
  }

  return [];
};

const INITIAL_CART_STATE = {
  total: 0,
  totalItems: 0,
  shippingFee: 10,
  cart: getLocalStorage(),
  isLoading: false,
  delivery: "",
};

const CART_ACTION_TYPE = {
  ADD_TO_CART: "ADD_TO_CART",
  CLEAR_CART: "CLEAR_CART",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_TOTAL: "SET_TOTAL",
  TOGGLE_AMOUNT: "TOGGLE_AMOUNT",
  TOGGLE_ISLOADING: "TOGGLE_ISLOADING",
  SET_DELIVERY: "SET_DELIVERY",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.ADD_TO_CART:
      return { ...state, cart: payload };
    case CART_ACTION_TYPE.CLEAR_CART:
      return { ...state, cart: [] };
    case CART_ACTION_TYPE.REMOVE_ITEM:
      return { ...state, cart: payload };
    case CART_ACTION_TYPE.SET_TOTAL:
      return {
        ...state,
        total: payload.newTotal,
        totalItems: payload.newAmount,
        shippingFee: payload.newShipping,
      };
    case CART_ACTION_TYPE.TOGGLE_AMOUNT:
      return { ...state, cart: payload };
    case CART_ACTION_TYPE.TOGGLE_ISLOADING:
      return { ...state, isLoading: payload };
    case CART_ACTION_TYPE.SET_DELIVERY:
      return { ...state, delivery: payload };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export { INITIAL_CART_STATE, CART_ACTION_TYPE, cartReducer };
