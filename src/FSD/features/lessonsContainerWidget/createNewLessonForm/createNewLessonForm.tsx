import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { defaultValues } from './model/defaultValues';
import {
  schemaCreateNewLessonForm,
  TSchemaCreateNewLessonFrom,
} from './model/schema';
import { useState, useMemo } from 'react';
import { Spinner } from '../../../../components/Spinner/Spinner';
import { TServerAnswer, loadStudentsNamesAndNextId, sendNewLesson } from '../../../entities/student/api/loadStudentsNames';
import { createApiErrorMessage } from '../../../shared/api/createApiErrorMessage';
import { showSuccessMessage } from '../../../shared/context/snackMessageContext/lib/helpers';
import { useSnackMessageContext } from '../../../shared/context/snackMessageContext/lib/useSnackMessageContext';
import { ControlledCheckboxField } from '../../../shared/ui/ControlledCheckboxField/controlledCheckBoxField';
import { ControlledDatePicker } from '../../../shared/ui/ControlledDatePicker/controlledDatePicker';
import { ControlledInputField } from '../../../shared/ui/ControlledInputField/controlledInputField';
import { ControlledSelectField } from '../../../shared/ui/ControlledSelectField/controlledSelectField';
import { FormWrapper } from '../../../shared/ui/FormWrapper/formWrapper';
import { StyledButton } from '../../../shared/ui/StyledButton/StyledButton';
import { createSelectOptions } from '../../../shared/utils/createSelectOption';


export const CreateNewLessonForm = () => {
  const [newLessonParams, setNewLessonParams] = useState<TServerAnswer>({ names: [], nextId: 0 })
  const studentNamesOptions = useMemo(
    () => createSelectOptions(newLessonParams.names),
    [newLessonParams.names]
  );

  const { openSnackMessage } = useSnackMessageContext();

  const methods = useForm<TSchemaCreateNewLessonFrom>({
    resolver: zodResolver(schemaCreateNewLessonForm),
    defaultValues: async () => {
      const { names, nextId } = await loadStudentsNamesAndNextId();
      setNewLessonParams((prev) => ({
        ...prev,
        names,
        nextId
      }))
      return defaultValues;
    },
    mode: 'onChange',
  });

  

  const handleSubmitForm = async (data: TSchemaCreateNewLessonFrom) => {
    const sendingData = { id: newLessonParams.nextId, ...data, price: +data.price };
    
    try {
      const response = await sendNewLesson(sendingData);

      if (response) {
        openSnackMessage(showSuccessMessage(`${newLessonParams.nextId}: Lesson was added!`))
        setNewLessonParams((prev) => ({
          ...prev,
          nextId: response.nextId
        }))
      }
    } catch (error) {
      openSnackMessage(createApiErrorMessage(error))
    }
    finally {
      methods.reset();
    }
  };

  if (methods.formState.isLoading) {
    return <Spinner />;
  }

  const customHandler = (event?: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Custom handler! Value: ${event?.target.value}`);
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
        customHandler={customHandler}
      />
      <ControlledDatePicker name="date" size="small" />
      <ControlledCheckboxField name="paidStatus" label="Paid" />
      <StyledButton type="submit">Create new Lesson</StyledButton>
    </FormWrapper>
  );
};