import { ReactNode } from 'react';
import {
  FieldValues,
  UseFormReturn,
  FormProvider,
} from 'react-hook-form';

type TFormWrapperBaseProps<TFieldValues extends FieldValues> = {
  children: ReactNode;
  methods: UseFormReturn<TFieldValues>;
  className?: string;
};

type TFormWrapperProps<TFieldValues extends FieldValues> =
  TFormWrapperBaseProps<TFieldValues>;

export const FormWrapper = <TFieldValues extends FieldValues>({
  children,
  methods,
}: TFormWrapperProps<TFieldValues>) => {
  return (
    <FormProvider {...methods}>
      {children}
    </FormProvider>
  );
};
