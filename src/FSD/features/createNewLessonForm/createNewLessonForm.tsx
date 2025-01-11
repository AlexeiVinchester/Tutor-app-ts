import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  loadStudentsNamesAndNextId,
  sendNewLesson,
  TServerAnswer,
} from '../../entities/student/api/loadStudentsNames';
import { useMemo, useState } from 'react';
import { Spinner } from '../../../components/Spinner/Spinner';
import { defaultValues } from './model/defaultValues';
import {
  schemaCreateNewLessonForm,
  TSchemaCreateNewLessonFrom,
} from './model/schema';

import { FormWrapper } from '../../shared/ui/FormWrapper/formWrapper';
import { ControlledInputField } from '../../shared/ui/ControlledInputField/controlledInputField';
import { ControlledSelectField } from '../../shared/ui/ControlledSelectField/controlledSelectField';
import { createSelectOptions } from '../../shared/utils/createSelectOption';
import { ControlledCheckboxField } from '../../shared/ui/ControlledCheckboxField/controlledCheckBoxField';
import { ControlledDatePicker } from '../../shared/ui/ControlledDatePicker/controlledDatePicker';
import { StyledButton } from '../../shared/ui/StyledButton/StyledButton';
import { showSnackMessage } from '../../../redux/slices/snackMessageSlice/snackMessageSlice';
import { createSnackMessage } from '../../../utils/createSnackMessage';
import { useDispatch } from 'react-redux';

export const CreateNewLessonForm = () => {
  const [newLessonParams, setNewLessonParams] = useState<TServerAnswer>({ names: [], nextId: 0 })
  const studentNamesOptions = useMemo(
    () => createSelectOptions(newLessonParams.names),
    [newLessonParams.names]
  );
  console.log(`nextId: ${newLessonParams.nextId}`)

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

  const dispatch = useDispatch();

  const handleSubmitForm = async (data: TSchemaCreateNewLessonFrom) => {
    const sendingData = { id: newLessonParams.nextId, ...data, price: +data.price };
    console.log(sendingData);
    try {
      const response = await sendNewLesson(sendingData);

      if (response) {
        dispatch(
          showSnackMessage(
            createSnackMessage(`${newLessonParams.nextId}: Lesson was added!`, 'success')
          )
        );
        setNewLessonParams((prev) => ({
          ...prev,
          nextId: response.nextId
        }))
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(
          showSnackMessage(
            createSnackMessage(
              `Error while additing! Error: ${error.message}`,
              'error'
            )
          )
        );
      } else {
        dispatch(
          showSnackMessage(
            createSnackMessage(`Unknown error occurred!`, 'error')
          )
        );
      }
    }
    finally {
      methods.reset();
    }
  };

  if (methods.formState.isLoading) {
    return <Spinner />;
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