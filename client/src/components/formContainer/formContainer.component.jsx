import { FormInput } from "../index.component";
import Wrapper from "./formContainer.styles";
import { useFormContext } from "../../contexts/formContext.context";
import { useCartContext } from "../../contexts/cartContext.context";

const FormContainer = () => {
  const {
    firstName,
    lastName,
    mobile,
    email,
    address,
    suburb,
    request,
    delivery,
    setValue,
  } = useFormContext();
  const { setDelivery } = useCartContext();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValue(name, value);

    if (name === "delivery") {
      setDelivery(value);
    }
  };

  return (
    <Wrapper>
      <div className="form-row flex-container">
        <FormInput
          type="text"
          name="firstName"
          text="first name *"
          id="first-name"
          value={firstName}
          onChangeHandler={onChangeHandler}
        />
        <FormInput
          type="text"
          name="lastName"
          text="last name *"
          id="last-name"
          value={lastName}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div className="form-row flex-container">
        <FormInput
          type="text"
          name="mobile"
          text="mobile *"
          id="mobile"
          value={mobile}
          onChangeHandler={onChangeHandler}
        />
        <FormInput
          type="email"
          name="email"
          text="email *"
          id="email"
          value={email}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div className="form-row flex-container">
        <FormInput
          type="text"
          name="address"
          text="address *"
          id="address"
          value={address}
          onChangeHandler={onChangeHandler}
        />
        <select
          name="suburb"
          id="suburb"
          required
          className="form-input"
          value={suburb}
          onChange={onChangeHandler}
        >
          <option value="" disabled selected>
            select your suburb *
          </option>
          <option value="orewa">Orewa</option>
          <option value="silverdale">silverdale</option>
          <option value="whangaparaoa">whangaparaoa</option>
        </select>
      </div>
      <div className="form-row flex-container">
        <textarea
          name="request"
          id="request"
          placeholder="If you have additional requests or not sure what to choose from the products/services, please write here."
          className="form-input"
          value={request}
          onChange={onChangeHandler}
        ></textarea>
        <select
          name="delivery"
          id="delivery"
          required
          className="form-input"
          value={delivery}
          onChange={onChangeHandler}
        >
          <option value="" disabled selected>
            select your delivery type *
          </option>
          <option value="standard (72hrs)">
            3 days standard service (no extra charge)
          </option>
          <option value="express (48hrs)">
            48 hrs express service (extra 20% of the total price)
          </option>
          <option value="super express (24hrs)">
            24 hrs super express service (extra 30% of the total price)
          </option>
        </select>
      </div>
    </Wrapper>
  );
};

export default FormContainer;
