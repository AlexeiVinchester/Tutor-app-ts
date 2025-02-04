import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formDefaultValues, optionsDefaultValues } from './model/defaultValues';
import { schemaCreateNewLessonForm, TSchemaCreateNewLessonFrom, } from './model/schema';
import { Spinner } from '../../../../components/Spinner/Spinner';
import { createApiErrorMessage } from '../../../shared/api/createApiErrorMessage';
import { showSuccessMessage } from '../../../shared/context/snackMessageContext/lib/helpers';
import { ControlledCheckboxField } from '../../../shared/ui/ControlledCheckboxField/controlledCheckBoxField';
import { ControlledDatePicker } from '../../../shared/ui/ControlledDatePicker/controlledDatePicker';
import { ControlledInputField } from '../../../shared/ui/ControlledInputField/controlledInputField';
import { ControlledSelectField } from '../../../shared/ui/ControlledSelectField/controlledSelectField';
import { FormWrapper } from '../../../shared/ui/FormWrapper/formWrapper';
import { StyledButton } from '../../../shared/ui/StyledButton/StyledButton';
import { createSelectOptions } from '../../../shared/utils/createSelectOption';
import { useLoadDataFromServer } from '../../../shared/hooks/useLoadDataFromServer';
import { loadInitialData, sendNewLesson } from './api/loaders';
import { TSendNewLessonServerAnswer } from './model/api.types';

export const CreateNewLessonForm = () => {
  const { 
    data: newLessonParams, 
    setData: setNewLessonParams,
    openSnackMessage,
    isLoading, 
    isError,
  } = useLoadDataFromServer(loadInitialData);

  const studentNamesOptions = newLessonParams ? createSelectOptions(newLessonParams.names) : optionsDefaultValues;

  const methods = useForm<TSchemaCreateNewLessonFrom>({
    resolver: zodResolver(schemaCreateNewLessonForm),
    defaultValues: formDefaultValues,
    mode: 'onChange',
  });

  const handleSubmitForm = async (data: TSchemaCreateNewLessonFrom) => {
    if (newLessonParams) {
      const sendingData = { id: newLessonParams.nextId, ...data, price: +data.price };

      try {
        const response: TSendNewLessonServerAnswer = await sendNewLesson(sendingData);

        if (response) {
          openSnackMessage(showSuccessMessage(`${newLessonParams.nextId}: Lesson was added!`))
          setNewLessonParams((prev) => ({
            ...prev,
            names: prev?.names || [],
            nextId: response.nextId
          }))
        }
      } catch (error) {
        openSnackMessage(createApiErrorMessage(error))
      }
      finally {
        methods.reset();
      }
    }
  };

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
      <StyledButton type="submit">Create new Lesson</StyledButton>
    </FormWrapper>
  );
};