import { MAIN, LESSONS, STATISTICS, STUDENTS } from "../../../../Router/routes";
import { NavBarItem } from "./interface/NavBarItem.interface";

const navBarItems: NavBarItem[] = [
    {
        id: 0, path: MAIN, title: 'Main'
    },
    {
        id: 1, path: LESSONS, title: 'Lessons'
    },
    {
        id: 2, path: STUDENTS, title: 'Students'
    },
    {
        id: 3, path: STATISTICS, title: 'Statistics'
    },
];

export { navBarItems };
