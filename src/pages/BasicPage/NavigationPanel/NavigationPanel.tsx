import classes from "./NavigationPanel.module.css";
import { NavigationMenuItems } from './NavigationMenuItems/NavigationMenuItems';
import { Logotype } from '../../../shared/ui/Logotype/Logotype';

const NavigationPanel = () => {
  return (
    <header className={classes.header}>
      <div className={classes.innerContainer}>
        <div className="flex">
          <Logotype />
          <NavigationMenuItems />
        </div>
        <button className={classes.logInButton}>
          Log In
        </button>
      </div>
    </header>
  );
};

export { NavigationPanel };
