import { combineReducers } from "redux";
import studentsSlice from "../slices/studentsSlice/studentsSlice";
import lessonsSlice from "../slices/lessonsSlice/lessonsSlice";

const rootReducer = combineReducers({
    students: studentsSlice,
    lessons: lessonsSlice
});

export { rootReducer };