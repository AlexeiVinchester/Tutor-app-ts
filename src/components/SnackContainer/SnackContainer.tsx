import { Snackbar, Alert } from "@mui/material";
import { ISnackContainerProps } from "./interface/SnackContainer.interface";

const SnackContainer = ({ isOpen, close, severity, message }: ISnackContainerProps) => {
    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={6000}
            onClose={close}

        >
            <Alert 
                onClose={close} 
                severity={severity} 
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export { SnackContainer };
