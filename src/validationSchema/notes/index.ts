import * as yup from 'yup';

export const noteValidationSchema = yup.object().shape({
  content: yup.string().required(),
  pet_id: yup.string().nullable(),
});
