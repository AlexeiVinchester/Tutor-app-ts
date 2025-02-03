import * as z from 'zod';

export const schemaEditLessonForm = z.object({
  name: z.string().nonempty('You should choose any name!'),
  price: z
    .string()
    .min(1, 'Sum should be more than 1 BYN!')
    .refine(
      (value) => {
        return !isNaN(+value) && +value > 0;
      },
      {
        message: 'Price should be a positive number!'
      }
    ),
  date: z.string(),
  paidStatus: z.boolean(),
});

export type TSchemaEditLessonForm = z.infer<typeof schemaEditLessonForm>;