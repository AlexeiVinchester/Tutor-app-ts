import { useForm } from "react-hook-form"
import { studentFormSchema, TStudentFormSchema } from "../model/studentFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormWrapper } from "../../../shared/ui/FormWrapper/formWrapper";

type TStudentFormProps = {
  defaultValues: TStudentFormSchema;
  onSubmit: (data: TStudentFormSchema) => void;
  shouldResetFields?: boolean;
  buttonName: string;
}

export const StudentForm = (
  {
    defaultValues,
    onSubmit,
    shouldResetFields
  }: TStudentFormProps) => {
  const methods = useForm<TStudentFormSchema>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(studentFormSchema)
  });

  const handleSubmitForm = (data: TStudentFormSchema) => {
    onSubmit(data);
    if (shouldResetFields) {
      methods.reset();
    }
  }

  return (
    <FormWrapper
      methods={methods}
      onSubmit={handleSubmitForm}
      className="flex flex-col gap-3"
    >

    </FormWrapper>
  )
}