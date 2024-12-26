import { ReactNode } from 'react';
import {
  FieldValues,
  UseFormReturn,
  SubmitHandler,
  FormProvider,
} from 'react-hook-form';

type TFormWrapperBaseProps<TFieldValues extends FieldValues> = {
  children: ReactNode;
  methods: UseFormReturn<TFieldValues>;
  className?: string;
  onSubmit: SubmitHandler<TFieldValues>;
};

type TFormWrapperProps<TFieldValues extends FieldValues> =
  TFormWrapperBaseProps<TFieldValues> &
    Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'>;

export const FormWrapper = <TFieldValues extends FieldValues>({
  children,
  methods,
  onSubmit,
  ...props
}: TFormWrapperProps<TFieldValues>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
};
