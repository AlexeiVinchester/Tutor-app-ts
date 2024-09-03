type Severity = {
    success: string;
    info: string;
    warning: string,
    error: string
};

export interface SnackMessageProps {
    isOpen: boolean;
    onCLose: () => void;
    status: keyof Severity;
    message: string;
};