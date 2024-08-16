import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";

const BasicPage = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <footer>
                
            </footer>
        </>
    );
}
export { BasicPage };

