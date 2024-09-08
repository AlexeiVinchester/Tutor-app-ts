import { IconButton } from "@mui/material"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavigationDrawerOpenButtonProps } from "./interface/NavigationDrawerOpenButton.interface"

const NavigationDrawerOpenButton = ({ onOpen }: NavigationDrawerOpenButtonProps) => {
    return (
        <div className="menu-open-icon-button">
            <IconButton onClick={onOpen}>
                <MenuOpenIcon />
            </IconButton>
        </div>
    );
};

export { NavigationDrawerOpenButton };
