import { useMemo } from "react";
import ReactDOM from "react-dom";
import { Alert, Snackbar } from "@mui/material";
import { useSnackMessageContext } from "../../context/snackMessageContext/lib/useSnackMessageContext";

export const SnackMessage = () => {
  const {
    isOpen,
    message,
    severity,
    closeSnackMessage
  } = useSnackMessageContext();

  const portalContainer = useMemo(() => document.getElementById('snackBar-portal'), []);

  if (!portalContainer) {
    return null;
  }

  return ReactDOM.createPortal(
    <Snackbar
      open={isOpen}
      autoHideDuration={2000}
      onClose={closeSnackMessage}
    >
      <Alert
        severity={severity}
        onClose={closeSnackMessage}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>,
    portalContainer
  );
};