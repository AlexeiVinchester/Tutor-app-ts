import * as z from 'zod';

export const lessonFormSchema = z.object({
  name: z.string().nonempty('You should choose any name'),
  price: z
    .string()
    .min(1, 'Sum is required')
    .refine(
      (value) => {
        return !isNaN(+value) && +value > 0;
      },
      {
        message: 'Price should be a positive number!',
      }
    ),
  date: z.string(),
  paidStatus: z.boolean(),
});

export type TLessonFromSchema = z.infer<typeof lessonFormSchema>;
