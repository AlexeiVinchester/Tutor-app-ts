import { createElement } from "react";
import { NavLink } from "react-router-dom";
import { TNavLink } from "../../types/navlink.type";
import classes from "./NavigationMenuItem.module.css";

const getClassName = ({isActive}: {isActive: boolean}) => isActive ? classes.activeMenuItem : classes.menuItem; 

const NavigationMenuItem = ({ title, icon, to }: TNavLink) => {
  return (
    <NavLink key={title} className={getClassName} to={to}>
      {createElement(icon)}
      {title}
    </NavLink>
  );
};

export { NavigationMenuItem };