import { IconButton } from "@mui/material"
import { CloseWindowButtonProps } from "./interface/CloseWindowButton.interface"
import CancelIcon from '@mui/icons-material/Cancel';

const CloseWindowButton = ({ onClose }: CloseWindowButtonProps) => {
    return (
        <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', right: '8px', top: '4px' }}
        >
            <CancelIcon />
        </IconButton>
    );
};

export { CloseWindowButton }; 
