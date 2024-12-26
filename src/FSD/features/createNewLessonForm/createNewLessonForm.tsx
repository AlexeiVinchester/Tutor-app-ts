import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loadStudentsNames } from '../../entities/student/api/loadStudentsNames';
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

export const CreateNewLessonForm = () => {
  const [options, setOptions] = useState<string[]>([]);
  const studentNamesOptions = useMemo(
    () => createSelectOptions(options),
    [options]
  );
  const methods = useForm<TSchemaCreateNewLessonFrom>({
    resolver: zodResolver(schemaCreateNewLessonForm),
    defaultValues: async () => {
      const studentNames = await loadStudentsNames();
      setOptions(studentNames);
      return defaultValues;
    },
    mode: 'onChange',
  });

  const handleSubmitForm = (data: TSchemaCreateNewLessonFrom) => {
    console.log(data);
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
        name="studentName"
        options={studentNamesOptions}
        label="Student"
      />
      <ControlledInputField
        name="price"
        label="Price"
        placeholder="Enter price of lesson"
        variant="outlined"
      />
      <ControlledDatePicker name="lessonDate" />
      <ControlledCheckboxField name="paidStatus" label="Paid" />
      <StyledButton type="submit">Create new Lesson</StyledButton>
    </FormWrapper>
  );
};
