import * as z from 'zod';

const phoneRegex = /^\+375\((25|29|33|44)\)\d{3}-\d{2}-\d{2}$/;

export const studentFormSchema = z.object({
  name: z.string().nonempty('You should enter name of student'),
  gender: z.string(),
  price: z.preprocess(
    (val) => {
      if (typeof val === 'string' && val.trim()) {
        const num = Number(val);
        return isNaN(num) ? val : num;
      }
      return val;
    },
    z.number({ invalid_type_error: 'Invalid type, enter number!' })
      .positive('Price should be a positive number')),
  form: z.preprocess(
    (val) => {
      if (typeof val === 'string' && val.trim()) {
        const num = Number(val);
        return isNaN(num) ? val : num;
      }
      return val;
    },
    z.number({ invalid_type_error: 'Should be a number!' })
      .int('Should be integer')
      .min(1, 'Min is 1 form')
      .max(11, 'Max is 11 form')
  ),
  parentsName: z.string().nonempty('You should enter name of student'),
  parentsMobilePhone: z
    .string()
    .regex(phoneRegex, 'Enter phone in such format: +375(44)111-11-11'),
  ownMobilePhone: z
    .string()
    .regex(phoneRegex, 'Enter phone in such format: +375(44)111-11-11'),
  activity: z.boolean()
});

export type TStudentFormSchema = z.infer<typeof studentFormSchema>;