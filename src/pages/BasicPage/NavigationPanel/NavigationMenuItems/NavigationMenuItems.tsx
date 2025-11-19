import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TaskIcon from '@mui/icons-material/Task';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import { routeMap } from '../../../../app/Router/routes';
import { TNavLink } from '../../../../shared/types/navlink.type';
import { NavigationMenuItem } from '../../../../shared/ui/NavigationMenuItem/NavigationMenuItem';

const navLinkMap: TNavLink[] = [
  { icon: HomeIcon, to: routeMap.main, title: "Main" },
  { icon: PersonIcon, to: routeMap.students, title: "Students" },
  { icon: SchoolIcon, to: routeMap.lessons, title: "Lessons" },
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
            <NavigationMenuItem
              key={navlink.title}
              title={navlink.title}
              icon={navlink.icon}
              to={navlink.to}
            />
          ))
        }
      </ul>
    </div>
  );
};

export { NavigationMenuItems };