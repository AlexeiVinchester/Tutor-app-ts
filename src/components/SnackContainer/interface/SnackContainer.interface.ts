import { TSnackBarSeverity } from "../../../share/interfaces/snackBarSeverity.type";

export interface ISnackContainerProps {
    isOpen: boolean;
    close: () => void;
    severity: TSnackBarSeverity;
    message: string | null;
}