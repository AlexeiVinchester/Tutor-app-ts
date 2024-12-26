import { Controller, FieldValues, FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loadStudentsNames } from "../../entities/student/api/loadStudentsNames";
import { ReactNode, useState } from "react";
import { Spinner } from "../../../components/Spinner/Spinner";
import { Button, Card, CardContent, Checkbox } from "@mui/material";

import FormControlLabel from '@mui/material/FormControlLabel';

import { defaultValues } from "./model/defaultValues";
import { schemaCreateNewLessonForm, TSchemaCreateNewLessonFrom } from "./model/schema";
import { StyledInput } from "../../shared/ui/StyledInput/styledInput";
import { StyledSelect } from "../../shared/ui/StyledSelect/StyledSelect";
import { StyledDatePicker } from "../../shared/ui/StyledDatePicker/styledDatePicker";

import dayjs from "dayjs";
import { PickerChangeHandlerContext, DateValidationError } from "@mui/x-date-pickers/models";

type TStyledFormWrapperProps = {
  children: ReactNode;
}

export const StyledFormWrapper = ({ children }: TStyledFormWrapperProps) => {
  return (
    <Card sx={{ maxWidth: 500, margin: ' 0 auto', padding: '10px 5px', boxShadow: '0 15px 20px #ABB2B9;' }}>
      <CardContent>
        {children}
      </CardContent>
    </ Card>
  );
};

type TFormWrapperBaseProps<TFieldValues extends FieldValues> = {
  children: ReactNode;
  methods: UseFormReturn<TFieldValues>;
  className?: string;
};

type TFormWrapperProps<TFieldValues extends FieldValues> = TFormWrapperBaseProps<TFieldValues> & React.HTMLAttributes<HTMLFormElement>;

export const FormWrapper = <TFieldValues extends FieldValues>({ children, methods, ...props }: TFormWrapperProps<TFieldValues>) => {
  return (
    <FormProvider {...methods}>
      <form  {...props}>
        {children}
      </form>
    </FormProvider>
  );
}

export const CreateNewLessonForm = () => {
  const [options, setOptions] = useState<string[]>([]);
  const methods = useForm<TSchemaCreateNewLessonFrom>({
    resolver: zodResolver(schemaCreateNewLessonForm),
    defaultValues: async () => {
      const studentNames = await loadStudentsNames();
      setOptions(studentNames);
      return defaultValues;
    },
    mode: 'onChange'
  });

  const handleSubmitForm = (data: TSchemaCreateNewLessonFrom) => {
    console.log(data)
  };

  if (methods.formState.isLoading) {
    return <Spinner />
  }

  return (
    <FormWrapper
      methods={methods}
      onSubmit={methods.handleSubmit(handleSubmitForm)}
      className="flex flex-col gap-3"
    >
      <Controller
        control={methods.control}
        name="studentName"
        render={({ field, fieldState }) => (
          <StyledSelect
            options={options}
            fieldState={fieldState}
            {...field}
          />
        )}
      />
      <Controller
        name="price"
        control={methods.control}
        render={({ field, fieldState }) => {
          return (
            <StyledInput
              fieldState={fieldState}
              {...field}
              fullWidth
              name="price"
              label="Price"
              variant="outlined"
              placeholder="Enter price of lesson"
            />
          );
        }}
      />
      <Controller
        control={methods.control}
        name="lessonDate"
        render={({ field: { onChange, value } }) => {
          const handleChangeDate = (date: dayjs.Dayjs | null, context: PickerChangeHandlerContext<DateValidationError>) => {
            const isoDate = date ? date.format("YYYY-MM-DD") : null;
            onChange(isoDate, context)
          };
          return (
            <StyledDatePicker
              handleChangeDate={handleChangeDate}
              value={dayjs(value)}
            />
          )
        }}
      />
      <Controller
        control={methods.control}
        name="paidStatus"
        render={({ field }) => (
          <FormControlLabel
            label="Paid"
            control={<Checkbox {...field} />} />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          borderRadius: '15px',
          bgcolor: 'rgb(255, 92, 53)',
          padding: '16px',
          color: 'white',
          ":hover": {
            bgcolor: 'rgb(80, 201, 173)'
          }
        }}
      >
        Create new Lesson
      </Button>
    </FormWrapper>

  )
}



