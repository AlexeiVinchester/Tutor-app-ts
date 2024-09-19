import { createSelector } from "reselect";
import { Student } from "../../share/interfaces/student.interface";
import { Store } from "../store/interface/store.interface";

export const selectStudents = (state: Store) => state.students;

export const selectNamesOfStudents = (students: Student[]) => students.map(student => student.name);
export const selectMemoNamesOfStudents = createSelector(selectStudents, selectNamesOfStudents);