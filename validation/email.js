const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEmailInput(data) {
  let errors = {};

  // data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.mobile = !isEmpty(data.mobile) ? data.mobile : "";
  data.suburb = !isEmpty(data.suburb) ? data.suburb : "";

  // if (Validator.isEmpty(data.name)) {
  //   errors.name = "Name field is required";
  // }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // if (!Validator.isEmail(data.email)) {
  //   errors.email = "Email is invalid";
  // }

  if (Validator.isEmpty(data.mobile)) {
    errors.mobile = "Phone field is required";
  }

  if (Validator.isEmpty(data.suburb)) {
    errors.suburb = "Suburb field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
