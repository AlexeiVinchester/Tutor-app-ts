import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState/initialState";
import { Student } from "../../../share/interfaces/student.interface";

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addNewStudent(state, action) {
            state.push(action.payload);
        },
        editStudent(state, action) {
            const editedIndex = state.findIndex((student: Student) => student.id === action.payload.id);
            state[editedIndex] = action.payload;
        },
        deleteStudent(state, action) {
            const deletedIndex = state.findIndex((student: Student) => student.id === action.payload);
            state.splice(deletedIndex, 1);
        }
    }
});

export const { addNewStudent, editStudent, deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;