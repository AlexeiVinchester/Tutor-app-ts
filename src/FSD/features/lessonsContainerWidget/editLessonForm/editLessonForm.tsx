import { useForm } from "react-hook-form"
import { schemaEditLessonForm, TSchemaEditLessonForm } from "./model/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { TLesson } from "../../../entities/lesson/model/lesson.type"
import { useLoadDataFromServer } from "../../../shared/hooks/useLoadDataFromServer";
import { createSelectOptions } from "../../../shared/utils/createSelectOption";
import { loadInitialData } from "../createNewLessonForm/api/loaders";
import { optionsDefaultValues } from "../createNewLessonForm/model/defaultValues";
import { Spinner } from "../../../../components/Spinner/Spinner";
import { ControlledCheckboxField } from "../../../shared/ui/ControlledCheckboxField/controlledCheckBoxField";
import { ControlledDatePicker } from "../../../shared/ui/ControlledDatePicker/controlledDatePicker";
import { ControlledInputField } from "../../../shared/ui/ControlledInputField/controlledInputField";
import { ControlledSelectField } from "../../../shared/ui/ControlledSelectField/controlledSelectField";
import { FormWrapper } from "../../../shared/ui/FormWrapper/formWrapper";
import { StyledButton } from "../../../shared/ui/StyledButton/StyledButton";
import { sendEditedLesson } from "./api/loaders";
import { TSendEditedLessonServerAnswer } from "./model/api.types";
import { createApiErrorMessage } from "../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../shared/context/snackMessageContext/lib/helpers";

type TEditLessonFormProps = {
  lesson: TLesson;
};

export const EditLessonForm = ({ lesson }: TEditLessonFormProps) => {
  const methods = useForm<TSchemaEditLessonForm>({
    resolver: zodResolver(schemaEditLessonForm),
    defaultValues: {
      ...lesson,
      price: lesson.price.toString()
    },
    mode: 'onChange'
  })

  const {
    data: newLessonParams,
    openSnackMessage,
    isLoading,
    setIsLoading,
    isError,
  } = useLoadDataFromServer(loadInitialData);

  const studentNamesOptions = newLessonParams ? createSelectOptions(newLessonParams.names) : optionsDefaultValues;

  const handleSubmitForm = async (data: TSchemaEditLessonForm) => {
    if (newLessonParams) {
      const sendingData = { ...lesson, ...data, price: +data.price };
      try {
        setIsLoading(true);
        const response: TSendEditedLessonServerAnswer = await sendEditedLesson(sendingData)

        if (response) {
          openSnackMessage(showSuccessMessage(`${response.editedLesson.id} lesoon was edited successfully!`))
        }
      } catch (error) {
        openSnackMessage(createApiErrorMessage(error));
      } finally {
        setIsLoading(false);
        methods.reset();
      }
    }
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Yooops, something goes wrong!</p>
  }

  return (
    <FormWrapper
      methods={methods}
      onSubmit={handleSubmitForm}
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
      <StyledButton type="submit">Edit Lesson</StyledButton>
    </FormWrapper>
  );
}