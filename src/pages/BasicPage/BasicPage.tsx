import { Outlet } from "react-router-dom";
import { NavigationPanel } from "./NavigationPanel/NavigationPanel";

const BasicPage = () => {
    return (
        <>
            <NavigationPanel />
            
            <Outlet />
            <footer>
                
            </footer>
        </>
    );
}
export { BasicPage };

