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
        deleteStudent(state, action) {
            state.splice(
                state.findIndex((student: Student) => student.id === action.payload),
                1);
        },
        editStudent() {
            
        }
    }
});

export const { addNewStudent, deleteStudent, editStudent } = studentsSlice.actions;
export default studentsSlice.reducer;