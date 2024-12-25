import { forwardRef, useId } from "react";
import { ControllerFieldState } from "react-hook-form";
import { TextFieldProps, FormControl, TextField, FormHelperText } from "@mui/material";

export type TStyledInputProps = TextFieldProps & { fieldState: ControllerFieldState }

export const StyledInput = forwardRef<HTMLInputElement, TStyledInputProps>(
    ({ fieldState, ...props }, ref) => {
        const textFieldId = useId();
        return (
            <FormControl fullWidth>
                <TextField
                    id={textFieldId}
                    inputRef={ref}
                    {...props}

                />
                <FormHelperText>{fieldState.error && fieldState.error.message}</FormHelperText>
            </FormControl>
        )
    });