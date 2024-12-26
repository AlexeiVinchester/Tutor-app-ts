import { useCallback, useState } from 'react';
import { TSnackBarSeverity } from '../share/interfaces/snackBarSeverity.type';

const useSnackMessage = () => {
  const [message, setMessage] = useState<string | null>('');
  const [severity, setSeverity] = useState<TSnackBarSeverity>('success');
  const [isOpenSnackBar, setIsOpenSnackBar] = useState<boolean>(false);

  const showSnackBar = useCallback(
    (message: string, severity: TSnackBarSeverity) => {
      setMessage(message);
      setSeverity(severity);
      setIsOpenSnackBar(true);
    },
    []
  );

  const closeSnackBar = useCallback(() => {
    setMessage(null);
    setIsOpenSnackBar(false);
  }, []);

  return { isOpenSnackBar, message, severity, showSnackBar, closeSnackBar };
};

export { useSnackMessage };
