import * as yup from "yup";

export const schema = yup
  .object()
  .shape({
    name: yup.string().required("field cannot be empty"),
    email: yup.string().email().required("field cannot be empty"),
    phoneNumber: yup.number().integer().required("field cannot be empty"),
    address: yup.string().required("field cannot be empty"),
    zipCode: yup
      .number()
      .positive()
      .integer()
      .required("field cannot be empty"),
    cityName: yup.string().required("field cannot be empty"),
    countryName: yup.string().required("field cannot be empty"),
    eMoneyNumber: yup.number().positive().integer().notRequired(),
    eMoneyPin: yup.number().positive().integer().notRequired(),
  })
  .required();
