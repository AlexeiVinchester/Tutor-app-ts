import { combineReducers } from "redux";
import studentsSlice from "../slices/studentsSlice/studentsSlice";
import lessonsSlice from "../slices/lessonsSlice/lessonsSlice";
import snackMessageSLice from "../slices/snackMessageSlice/snackMessageSlice";
import loadingSlice from "../slices/loadingSlice/loadingSlice";

const rootReducer = combineReducers({
    students: studentsSlice,
    lessons: lessonsSlice,
    snackMessage: snackMessageSLice,
    loadingFlag: loadingSlice
});

export { rootReducer };