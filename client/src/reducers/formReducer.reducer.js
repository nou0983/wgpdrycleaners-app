const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  address: "",
  suburb: "",
  request: "",
  delivery: "",
};

const FORM_ACTION_TYPE = {
  SET_INPUT: "SET_INPUT",
  RESET_INPUTS: "RESET_INPUTS",
};

const formReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FORM_ACTION_TYPE.SET_INPUT:
      return { ...state, [payload.name]: payload.value };
    case FORM_ACTION_TYPE.RESET_INPUTS:
      return INITIAL_FORM_STATE;
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export { INITIAL_FORM_STATE, FORM_ACTION_TYPE, formReducer };
