import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState/initialState";

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        //payload will be a new object: Student 
        addNewStudent(state, action) {
            state.push(action.payload);
        },
        // payload will be id of deleted student
        deleteStudent(state, action) {
            state.filter((student) => student.id !== action.payload);
        },
        // payload will be new Student with correct data
        editStudent() {
            
        }
    }
});

export const { addNewStudent, deleteStudent, editStudent } = studentsSlice.actions;
export default studentsSlice.reducer;