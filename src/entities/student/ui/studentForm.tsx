import { useForm } from "react-hook-form"
import { studentFormSchema, TStudentFormSchema } from "../model/studentFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormWrapper } from "../../../shared/ui/FormWrapper/formWrapper";
import { ControlledSelectField } from "../../../shared/ui/ControlledSelectField/controlledSelectField";
import { defaultGenderOptions } from "../model/defaultOptions";
import { ControlledInputField } from "../../../shared/ui/ControlledInputField/controlledInputField";
import { ControlledCheckboxField } from "../../../shared/ui/ControlledCheckboxField/controlledCheckBoxField";
import { StyledButton } from "../../../shared/ui/StyledButton/StyledButton";

type TStudentFormProps = {
  defaultValues: TStudentFormSchema;
  onSubmit: (data: TStudentFormSchema) => void;
  shouldResetFields?: boolean;
  buttonName: string;
};

export const StudentForm = (
  {
    defaultValues,
    onSubmit,
    shouldResetFields,
    buttonName
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
    >
      <form
        onSubmit={methods.handleSubmit(handleSubmitForm)}
        className="flex flex-col gap-3"
      >
        <ControlledSelectField
          name="gender"
          options={defaultGenderOptions}
          label="Student"
          size="small"
        />
        <ControlledInputField
          name="name"
          label="Name"
          placeholder="Enter name of student"
          variant="outlined"
          size="small"
        />
        <ControlledInputField
          name="form"
          label="Form"
          placeholder="Enter form of student"
          variant="outlined"
          size="small"
        />
        <ControlledInputField
          name="price"
          label="Price"
          placeholder="Enter price of lesson"
          variant="outlined"
          size="small"
        />
        <ControlledInputField
          name="parentsName"
          label="Parent's name"
          placeholder="Enter parent's name"
          variant="outlined"
          size="small"
        />
        <ControlledInputField
          name="ownMobilePhone"
          label="Student's phone"
          placeholder="Enter student's phone"
          variant="outlined"
          size="small"
        />
        <ControlledInputField
          name="parentsMobilePhone"
          label="Parent's phone"
          placeholder="Enter parent's phone"
          variant="outlined"
          size="small"
        />
        <ControlledCheckboxField
          name="activity"
          label="Activity"
        />
        <StyledButton type="submit">{buttonName}</StyledButton>
      </form>
    </FormWrapper>
  );
};