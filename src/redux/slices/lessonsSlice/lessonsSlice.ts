import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState/initialState";
import { ILesson } from "../../../share/interfaces/lesson.interface";
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
        editLesson(state, action) {
            const editedIndex = state.findIndex((lesson: ILesson) => lesson.id === action.payload.id);
            state[editedIndex] = action.payload;
        }
    }
});

export const { addNewLesson, deleteLesson, editLesson } = lessonsSlice.actions;
export default lessonsSlice.reducer;