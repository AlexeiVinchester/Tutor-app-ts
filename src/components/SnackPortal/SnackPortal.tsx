import { Snackbar, Alert, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../redux/store/interface/store.interface';
import { hideSnackMessage } from '../../redux/slices/snackMessageSlice/snackMessageSlice';
import ReactDOM from 'react-dom';

const SnackPortal = () => {
  const dispatch = useDispatch();
  const { isOpen, message, severity } = useSelector(
    (state: Store) => state.snackMessage
  );
  const isLoading = useSelector((state: Store) => state.loadingFlag.isLoading);

  const handleClose = () => {
    dispatch(hideSnackMessage());
  };

  const portalContainer = document.getElementById('snackBar-portal');
  if (!portalContainer) {
    return null;
  }

  return ReactDOM.createPortal(
    <Snackbar
      open={isOpen || isLoading}
      autoHideDuration={isOpen ? 6000 : null}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ width: '100%' }}
        icon={
          isLoading ? <CircularProgress color="inherit" size={20} /> : undefined
        }
      >
        {isLoading ? 'Loading...' : message}
      </Alert>
    </Snackbar>,
    portalContainer
  );
};

export { SnackPortal };
