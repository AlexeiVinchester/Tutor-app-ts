import { Drawer, Divider, Button } from "@mui/material"
import { NavLink } from "react-router-dom"
import { CloseWindowButton } from "../../../../components/CloseWindowButton/CloseWindowButton"
import { Logotype } from "../../../../components/Logotype/Logotype"
import { MAIN, STUDENTS, LESSONS, STATISTICS, TASKS, ABOUT } from "../../../../Router/routes"
import { NavigationDrawerProps } from "./interface/NavigationDrawer.interface"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TaskIcon from '@mui/icons-material/Task';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SchoolIcon from '@mui/icons-material/School';

const NavigationDrawer = ({ isOpen, onClose }: NavigationDrawerProps) => {
    return (
        <Drawer open={isOpen} anchor="right" transitionDuration={700} >
            <CloseWindowButton onClose={onClose} />
            <div className=" flex items-center justify-center mt-4 mb-2">
                <Logotype />
            </div>
            <div className="w-screen">
                <div className="mr-2 ml-2">
                    <ul>
                        <li><NavLink className="menu-item" to={MAIN}><HomeIcon />Main<KeyboardArrowRightIcon className="menu-item-arrow-right " /></NavLink></li>
                        <li><NavLink className="menu-item" to={STUDENTS}><PersonIcon />Students<KeyboardArrowRightIcon className="menu-item-arrow-right " /></NavLink></li>
                        <li><NavLink className="menu-item" to={LESSONS}><SchoolIcon />Lessons<KeyboardArrowRightIcon className="menu-item-arrow-right " /></NavLink></li>
                        <li><NavLink className="menu-item" to={STATISTICS}><EqualizerIcon />Statistics<KeyboardArrowRightIcon className="menu-item-arrow-right " /></NavLink></li>
                        <li><NavLink className="menu-item" to={TASKS}><TaskIcon />Tasks<KeyboardArrowRightIcon className="menu-item-arrow-right " /></NavLink></li>
                        <li><NavLink className="menu-item" to={ABOUT}><InfoIcon />About<KeyboardArrowRightIcon className="menu-item-arrow-right " /></NavLink></li>
                    </ul>
                    <Divider sx={{ marginTop: '8px' }} />
                    <Button sx={{ borderRadius: '15px', marginTop: '16px', bgcolor: 'rgb(255, 92, 53)' }} fullWidth variant='contained'>Log In</Button>
                </div>
            </div>
        </Drawer>
    );
};

export { NavigationDrawer }; 
