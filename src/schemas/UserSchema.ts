import * as yup from 'yup';

export const userSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  phone: yup.string().min(10).required(),
  password: yup.string().min(6).required(),
  checkbox: yup.boolean().required().oneOf([true]),
});
