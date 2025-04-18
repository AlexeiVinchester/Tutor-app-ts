import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { lessonFormSchema, TLessonFromSchema } from "../model/lessonFormSchema"
import { TInitialLessonParams } from "../model/loadInitialDataServerAnswer.type";
import { optionsDefaultValues } from "../model/defaultValues";
import { createLessonsNameSelectOptions } from "../lib/createSelectOption";
import { ControlledCheckboxField } from "../../../shared/ui/ControlledCheckboxField/controlledCheckBoxField";
import { ControlledDatePicker } from "../../../shared/ui/ControlledDatePicker/controlledDatePicker";
import { ControlledInputField } from "../../../shared/ui/ControlledInputField/controlledInputField";
import { ControlledSelectField } from "../../../shared/ui/ControlledSelectField/controlledSelectField";
import { FormWrapper } from "../../../shared/ui/FormWrapper/formWrapper";
import { StyledButton } from "../../../shared/ui/StyledButton/StyledButton";

type TLessonFormProps = {
  defaultValues: TLessonFromSchema;
  initialLessonsParams: TInitialLessonParams;
  shouldResetFields?: boolean;
  buttonName: string;
  onSubmit: (data: TLessonFromSchema) => void;
};

export const LessonForm = (
  {
    onSubmit,
    defaultValues,
    initialLessonsParams,
    shouldResetFields,
    buttonName
  }: TLessonFormProps
) => {
  const methods = useForm<TLessonFromSchema>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(lessonFormSchema)
  });
  const studentNamesOptions =
    initialLessonsParams ?
      createLessonsNameSelectOptions(initialLessonsParams.studentsParams) :
      optionsDefaultValues;

  const handleSUbmitForm = async (data: TLessonFromSchema) => {
    onSubmit(data);
    if (shouldResetFields) {
      methods.reset();
    }
  };

  return (
    <FormWrapper
      methods={methods}
      onSubmit={handleSUbmitForm}
      className="flex flex-col gap-3"
    >
      <ControlledSelectField
        name="name"
        options={studentNamesOptions}
        label="Student"
        size="small"
      />
      <ControlledInputField
        name="price"
        label="Price"
        placeholder="Enter price of lesson"
        variant="outlined"
        size="small"
      />
      <ControlledDatePicker name="date" size="small" />
      <ControlledCheckboxField name="paidStatus" label="Paid" />
      <StyledButton type="submit">{buttonName}</StyledButton>
    </FormWrapper>
  );
};