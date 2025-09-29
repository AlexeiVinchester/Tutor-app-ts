import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TaskIcon from '@mui/icons-material/Task';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import { MAIN, STUDENTS, LESSONS, STATISTICS, TASKS, ABOUT } from '../../../../app/Router/routes';
import { createElement } from 'react';

const navLinkMap = [
  { icon: HomeIcon, to: MAIN, title: "Main" },
  { icon: PersonIcon, to: STUDENTS, title: "Students" },
  { icon: SchoolIcon, to: LESSONS, title: "Lessons" },
  { icon: EqualizerIcon, to: STATISTICS, title: "Statistics" },
  { icon: TaskIcon, to: TASKS, title: "Tasks" },
  { icon: InfoIcon, to: ABOUT, title: "About" },
];

const NavigationMenuItems = () => {
  return (
    <div className="flex menu-box">
      <ul className="flex justify-between items-center">
        {
          navLinkMap.map(navlink => (
            <NavLink key={navlink.title} className="menu-item" to={navlink.to}>
              {createElement(navlink.icon)}
              {navlink.title}
            </NavLink>
          ))
        }
      </ul>
    </div>
  );
};

export { NavigationMenuItems };
