import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formDefaultValues, optionsDefaultValues } from './model/defaultValues';
import { schemaCreateNewLessonForm, TSchemaCreateNewLessonFrom, } from './model/schema';
import { useState, useMemo, useEffect } from 'react';
import { Spinner } from '../../../../components/Spinner/Spinner';
import { TServerAnswerAddLesson, loadStudentsNamesAndNextId, sendNewLesson } from '../../../entities/student/api/loadStudentsNames';
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
import { TLoaderData } from '../../../shared/api/loaderData.type';

export const useLoadServerData = <T, P = void>(loader: TLoaderData<T, P>, params?: P) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const { openSnackMessage } = useSnackMessageContext();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await loader(params);
        setData(data);
      } catch (error) {
        openSnackMessage(createApiErrorMessage(error))
        setIsError(true)
      } finally {
        setIsLoading(false);
      }
    })();
  }, [loader, openSnackMessage, params]);

  return { data, setData, isLoading, isError, openSnackMessage };
}

export const CreateNewLessonForm = () => {
  const { 
    data: newLessonParams, 
    isLoading, 
    isError,
    openSnackMessage,
    setData: setNewLessonParams
  } = useLoadServerData(loadStudentsNamesAndNextId)

  const studentNamesOptions = useMemo(
    () => {
      return newLessonParams ? createSelectOptions(newLessonParams.names) : optionsDefaultValues;
    },
    [newLessonParams]
  );

  const methods = useForm<TSchemaCreateNewLessonFrom>({
    resolver: zodResolver(schemaCreateNewLessonForm),
    defaultValues: formDefaultValues,
    mode: 'onChange',
  });

  const handleSubmitForm = async (data: TSchemaCreateNewLessonFrom) => {
    if (newLessonParams) {
      const sendingData = { id: newLessonParams.nextId, ...data, price: +data.price };

      try {
        const response: TServerAnswerAddLesson = await sendNewLesson(sendingData);

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

  const customHandler = (event?: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Custom handler! Value: ${event?.target.value}`);
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
        customHandler={customHandler}
      />
      <ControlledDatePicker name="date" size="small" />
      <ControlledCheckboxField name="paidStatus" label="Paid" />
      <StyledButton type="submit">Create new Lesson</StyledButton>
    </FormWrapper>
  );
};