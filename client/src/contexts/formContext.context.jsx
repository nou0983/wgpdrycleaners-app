import { createContext, useContext, useReducer } from "react";
import {
  INITIAL_FORM_STATE,
  FORM_ACTION_TYPE,
  formReducer,
} from "../reducers/formReducer.reducer";
import { createAction } from "../utils/createAction";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_FORM_STATE);

  const setValue = (name, value) => {
    const payload = { name, value };
    dispatch(createAction(FORM_ACTION_TYPE.SET_INPUT, payload));
  };

  const clearValues = () => {
    dispatch(createAction(FORM_ACTION_TYPE.RESET_INPUTS, {}));
  };

  const value = {
    ...state,
    setValue,
    clearValues,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

const useFormContext = () => {
  return useContext(FormContext);
};

export { FormContextProvider, useFormContext };
