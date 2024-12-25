import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loadStudentsNames } from "../../entities/student/api/loadStudentsNames";
import { ReactNode, useState } from "react";
import { Spinner } from "../../../components/Spinner/Spinner";
import { Button, Card, CardContent, Checkbox, FormControl } from "@mui/material";

import FormControlLabel from '@mui/material/FormControlLabel';

import { defaultValues } from "./model/defaultValues";
import { schemaCreateNewLessonForm, TSchemaCreateNewLessonFrom } from "./model/schema";
import { StyledInput } from "../../shared/ui/StyledInput/styledInput";
import { StyledSelect } from "../../shared/ui/StyledSelect/StyledSelect";
import { StyledDatePicker } from "../../shared/ui/StyledDatePicker/styledDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

type TFormWrapperProps = {
    children: ReactNode;
}

export const FormWrapper = ({ children }: TFormWrapperProps) => {
    return (
        <Card sx={{ maxWidth: 500, margin: ' 0 auto', padding: '10px 5px', boxShadow: '0 15px 20px #ABB2B9;' }}>
            <CardContent>
                {children}
            </CardContent>
        </ Card>
    );
};

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
        <FormProvider {...methods}>
            <form
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
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    value={field.value ? dayjs(field.value) : null}
                                    onChange={(date) => {
                                        const isoDate = date ? date.format("YYYY-MM-DD") : null;
                                        field.onChange(isoDate)
                                    }}
                                />
                            </LocalizationProvider>
                        </FormControl>
                        // <StyledDatePicker

                        //     field={field}
                        // />
                    )}
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
            </form>
        </FormProvider>

    )
}



