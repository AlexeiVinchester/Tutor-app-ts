// schema.ts
import * as z from 'zod';

export const studentFormSchema = z.object({
  name: z.string().nonempty('You should enter name of student'),
  gender: z.string(),
  price: z.number().positive('Price should be a positive number!'), // ZodNumber
  form: z.number().int('Should be integer').min(1).max(11),         // ZodNumber
  parentsName: z.string().nonempty('You should enter name of student'),
  parentsMobilePhone: z.string().regex(/^\+375\((25|29|33|44)\)\d{3}-\d{2}-\d{2}$/, 'Enter phone in such format: +375(44)111-11-11'),
  ownMobilePhone: z.string().regex(/^\+375\((25|29|33|44)\)\d{3}-\d{2}-\d{2}$/, 'Enter phone in such format: +375(44)111-11-11'),
  activity: z.boolean(),
});
export type TStudentFormSchema = z.infer<typeof studentFormSchema>;
