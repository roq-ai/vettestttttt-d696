import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  address: yup.string().required(),
  phone_number: yup.string().required(),
  email_address: yup.string().required(),
  user_id: yup.string().nullable(),
});
