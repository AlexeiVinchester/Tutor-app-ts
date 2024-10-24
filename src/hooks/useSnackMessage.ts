import { useState } from "react"

const useSnackMessage = () => {
    const [message, setMessage] = useState<string | null>('');
    const [severity, setSeverity] = useState<'success' | 'error'>('success');
    const [isOpenSnackBar, setIsOpenSnackBar] = useState<boolean>(false);

    const showSnackBar = (message: string, severity: 'success' | 'error') => {
        setMessage(message);
        setSeverity(severity);
        setIsOpenSnackBar(true);
    };

    const closeSnackBar = () => {
        setMessage(null);
        setIsOpenSnackBar(false);
    };

    return { isOpenSnackBar, message, severity, showSnackBar, closeSnackBar };
};

export { useSnackMessage };