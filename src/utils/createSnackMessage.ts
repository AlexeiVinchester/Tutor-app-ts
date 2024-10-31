import { TSnackBarSeverity } from "../share/interfaces/snackBarSeverity.type";

export const createSnackMessage = (message: string, severity: TSnackBarSeverity) => {
    return {
        message,
        severity
    };
};