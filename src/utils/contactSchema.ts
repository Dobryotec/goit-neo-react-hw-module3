import { object, string } from 'yup';

export const contactSchema = object({
  name: string()
    .min(3, 'must be at least 3 characters long')
    .max(50, 'must be less than 50')
    .required(),
  number: string()
    .min(3, 'must be at least 3 characters long')
    .max(50, 'must be less than 50 characters')
    .required(),
});
