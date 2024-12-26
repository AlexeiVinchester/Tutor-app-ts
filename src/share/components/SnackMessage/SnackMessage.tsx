import { Alert, Snackbar } from '@mui/material';
import { SnackMessageProps } from './interface/SnackMessage.interface';

const SnackMessage = ({
  isOpen,
  onCLose,
  status,
  message,
}: SnackMessageProps) => {
  return (
    <Snackbar open={isOpen} onClose={onCLose} autoHideDuration={5000}>
      <Alert severity={status}>{message}</Alert>
    </Snackbar>
  );
};

export { SnackMessage };
