import { useMemo } from "react";
import ReactDOM from "react-dom";
import { Dialog, IconButton, Card, CardContent, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useModalWindowContext } from "../../context/modalWindowContext/lib/useModalWindowContext";

export const ModalWindow = () => {
  const { isOpen, close, header, modalJSX } = useModalWindowContext();

  const portalContainer = useMemo(() => document.getElementById('modalWindow-portal'), []);

  if (!portalContainer) {
    return null;
  }

  return ReactDOM.createPortal(
    <Dialog open={isOpen} onClose={close}>
      <IconButton
        sx={{ position: 'absolute', right: '5px', top: '5px' }}
        onClick={close}
      >
        <CloseIcon />
      </IconButton>
      <Card
        sx={{
          maxWidth: 500,
          margin: ' 0 auto',
          padding: '20px 10px',
          boxShadow: '0 15px 20px #ABB2B9;',
          backgroundColor: '#f7f5f5f9',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            {header}
          </Typography>
          {modalJSX}
        </CardContent>
      </Card>
    </Dialog>,
    portalContainer
  );
}