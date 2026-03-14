import { Outlet } from 'react-router-dom';
import { NavigationPanel } from './NavigationPanel/NavigationPanel';
import { Footer } from './Footer/Footer';
import classes from "./BasicPage.module.css";

const BasicPage = () => {
  return (
    <>
      <NavigationPanel />
      <main className={classes.basicContainer}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export { BasicPage };
