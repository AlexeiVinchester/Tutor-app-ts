import { IconButton } from "@mui/material";
import { RoundAddButtonProps } from "./interface/RoundAddButton.interface";

const RoundAddButton = ({ openHandler, children}: RoundAddButtonProps) => {
    return (
        <IconButton
            sx={{position: 'fixed', bottom: '50px', right: '50px', color: 'rgb(255, 69, 0)'}}
            size='large'
            onClick={openHandler}
        >
            {children}
        </IconButton>
    );
};

export { RoundAddButton };
