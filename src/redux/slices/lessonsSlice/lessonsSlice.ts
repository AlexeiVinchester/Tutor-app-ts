import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState/initialState";
const lessonsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        addNewLesson(state, action) {
            state.push(action.payload);
        },
        deleteLesson(state, action) {
            state.filter((lesson) => lesson.id !== action.payload);
        },
        editLesson() {

        }
    }
});

export const { addNewLesson, deleteLesson, editLesson } = lessonsSlice.actions;
export default lessonsSlice.reducer;