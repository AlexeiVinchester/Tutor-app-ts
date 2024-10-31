import { combineReducers } from "redux";
import studentsSlice from "../slices/studentsSlice/studentsSlice";
import lessonsSlice from "../slices/lessonsSlice/lessonsSlice";
import snackMessageSLice from "../slices/snackMessageSlice/snackMessageSlice";

const rootReducer = combineReducers({
    students: studentsSlice,
    lessons: lessonsSlice,
    snackMessage: snackMessageSLice,
});

export { rootReducer };