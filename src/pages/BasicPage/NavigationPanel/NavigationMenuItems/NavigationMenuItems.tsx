import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TaskIcon from '@mui/icons-material/Task';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import { MAIN, STUDENTS, LESSONS, STATISTICS, TASKS, ABOUT } from "../../../../Router/routes";

const NavigationMenuItems = () => {
    return (
        <div className="flex menu-box">
            <ul className="flex justify-between items-center" >
                <li><NavLink className="menu-item" to={MAIN}><HomeIcon />Main</NavLink></li>
                <li><NavLink className="menu-item" to={STUDENTS}><PersonIcon />Students</NavLink></li>
                <li><NavLink className="menu-item" to={LESSONS}><SchoolIcon />Lessons</NavLink></li>
                <li><NavLink className="menu-item" to={STATISTICS}><EqualizerIcon />Statistics</NavLink></li>
                <li><NavLink className="menu-item" to={TASKS}><TaskIcon />Tasks</NavLink></li>
                <li><NavLink className="menu-item" to={ABOUT}><InfoIcon />About</NavLink></li>
            </ul>
        </div>
    );
};

export { NavigationMenuItems };
