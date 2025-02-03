import { FieldValues, useController, UseControllerProps, useForm } from 'react-hook-form';
//import { CreateNewLessonForm } from '../../FSD/features/lessonsContainerWidget/createNewLessonForm/createNewLessonForm';
import { StyledFormWrapper } from '../../FSD/shared/ui/StyledFormWrapper/styledFormWrapper';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

export type TTestFormFields = {
  userId: number;
  id: number;
  title: string;
  body: string;
  firstName?: string;
};

const CustomInput = <T extends FieldValues>(props: UseControllerProps<T>) => {
  const { field, fieldState } = useController({...props});

  return (
    <div>
      <TextField {...field} value={field.value || ''}/>
      <p className='text-red-500'>{fieldState.isDirty && "isDirty"}</p>
      <p className='text-red-500'>{fieldState.isTouched && "isTouched"}</p>
      <p className='text-red-500'>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
}

const TestForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      isDirty,
      errors,
    },
    reset,
    resetField,
    setError,
    clearErrors,
    setValue,
    setFocus,
    getValues,
    control
  } = useForm<TTestFormFields>({
    defaultValues: async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        return {...response.data, firstName: 'Vinnichek'};
      } catch (error) {
        if (error instanceof Error) {
          console.log('Something goes wrong!')
        }
      }
    }
  });

  console.log('New render of form')

  const handleSubmitForm = (data: TTestFormFields) => {
    console.log(data)
  }

  const handleFullResetForm = () => {
    reset();
  }

  const handlePartialReset = () => {
    reset({ userId: 0, id: 0 })
  }

  const handleResetField = () => {
    resetField('userId', { keepDirty: true })
  }

  const handleSetErrorOnUserId = () => {
    setError(
      'userId',
      {
        type: 'customErrorType',
        message: 'custom error'
      },
      {
        shouldFocus: true
      }
    )
  }

  const handleClearErrors = () => {
    clearErrors()
  }

  const handleSetValueOnBody = () => {
    setValue('body', 'hello')
  }

  const handleSetFocus = () => {
    setFocus('userId');
  }

  const handleGetValues = () => {
    console.log(getValues())
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className='flex flex-col'
    >
      {isDirty && <p className='text-red-600'>Form is dirty!</p>}
      <input
        {...register('userId', {
          required: { value: true, message: 'Requiered field' },
        })}
        className='border-2'
      />
      {errors.userId && <p className='text-red-500'>{errors.userId.message}</p>}
      <input
        {...register('body', {
          required: { value: true, message: 'Requiered field' },
        })}
        className='border-2'
      />
      <CustomInput name='firstName' control={control}/>
      <Button type='submit'>Submit</Button>
      <Button onClick={handleFullResetForm}>Reset()</Button>
      <Button onClick={handlePartialReset}>Reset(id, userid)</Button>
      <Button onClick={handleResetField}>Reset field id</Button>
      <Button onClick={handleSetErrorOnUserId}>setError on User id</Button>
      <Button onClick={handleClearErrors}>clear Errors</Button>
      <Button onClick={handleSetValueOnBody}>setValue to body</Button>
      <Button onClick={handleSetFocus}>setFocus on userId</Button>
      <Button onClick={handleGetValues}>getValues</Button>

    </form>
  );
}

const AboutAppPage = () => {
  return (
    <StyledFormWrapper>
      <TestForm />
      {/* <CreateNewLessonForm /> */}
    </StyledFormWrapper>
  );
};


export { AboutAppPage };
