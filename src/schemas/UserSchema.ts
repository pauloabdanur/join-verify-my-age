import * as yup from 'yup';

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .required()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Name can only contain letters.'
    ),
  email: yup.string().email().required(),
  phone: yup.string().min(10).required(),
  password: yup.string().min(6).required(),
  checkbox: yup.boolean().required().oneOf([true]),
});
