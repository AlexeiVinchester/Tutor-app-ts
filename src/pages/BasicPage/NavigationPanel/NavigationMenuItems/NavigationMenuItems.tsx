import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TaskIcon from '@mui/icons-material/Task';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import { routeMap } from '../../../../app/Router/routes';
import { createElement } from 'react';

const navLinkMap = [
  { icon: HomeIcon, to: routeMap.main,  title: "Main" },
  { icon: PersonIcon, to: routeMap.students, title: "Students" },
  { icon: SchoolIcon, to: routeMap.students, title: "Lessons" },
  { icon: EqualizerIcon, to: routeMap.statistics, title: "Statistics" },
  { icon: TaskIcon, to: routeMap.tasks, title: "Tasks" },
  { icon: InfoIcon, to: routeMap.about, title: "About" },
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