const FormInput = ({type, name, id, text, value, onChangeHandler}) => {
  return (
    <div className="form-container">
      <input
        type={type}
        required
        placeholder={text}
        name={name}
        value={value}
        onChange={onChangeHandler}
        id={id}
        className="form-input"
      />   
      <label htmlFor={id} className="form-label">
        {text}
      </label>
    </div>
  );
}

export default FormInput;