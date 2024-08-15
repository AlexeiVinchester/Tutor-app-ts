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
            console.log('edited index: ', editedIndex)
            state[editedIndex] = action.payload;
        },
    }
});

export const { addNewStudent, editStudent } = studentsSlice.actions;
export default studentsSlice.reducer;