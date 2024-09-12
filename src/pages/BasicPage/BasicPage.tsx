import { Outlet } from "react-router-dom";
import { NavigationPanel } from "./NavigationPanel/NavigationPanel";
import { Footer } from "./Footer/Footer";

const BasicPage = () => {
    return (
        <>
            <NavigationPanel />
            <main className="box-border">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
export { BasicPage };

