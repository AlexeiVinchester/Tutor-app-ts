import { createSelector } from "reselect";
import { Store } from "../../redux/store/interface/store.interface";
import { ILesson } from "../../share/interfaces/lesson.interface";
import { useSelector } from "react-redux";
import { Student } from "../../share/interfaces/student.interface";
import { useState } from "react";

const selectLessons = (state: Store) => state.lessons;
const selectStudents = (state: Store) => state.students;

const selectAmountOfLessons = (lessons: ILesson[]) => lessons.length;
const selectMemoAmountOfLessons = createSelector(selectLessons, selectAmountOfLessons);

const selectFullPriceOfLessons = (lessons: ILesson[]) => lessons.reduce((cur, lesson) => cur + lesson.price, 0);
const selectMemoFullPriceOfLessons = createSelector(selectLessons, selectFullPriceOfLessons);

const selectAllLessonsForStudent = (lessons: ILesson[], name: string) => lessons.filter((lesson) => lesson.name === name);

const selectAmountOfLessonsForStudent = (lessons: ILesson[], name: string) => selectAllLessonsForStudent(lessons, name).length;
const selectMemoAmountOfLessonsForStudent = createSelector([selectLessons, (_, name) => name], selectAmountOfLessonsForStudent);

const selectFullIncomePerStudent = (lessons: ILesson[], name: string) => {
    return selectAllLessonsForStudent(lessons, name)
                  .reduce((cur, lesson) => cur + lesson.price, 0);
};
const selectMemoFullIncomePerStudent = createSelector([selectLessons, (_, name) => name], selectFullIncomePerStudent);

const selectNamesOfStudents = (students: Student[]) => students.map(student => student.name);
const selectMemoNamesOfStudents = createSelector(selectStudents, selectNamesOfStudents);

const FullStatisticsPage = () => {
    const amountOfLessons = useSelector(selectMemoAmountOfLessons);
    const fullPriceOfLessons = useSelector(selectMemoFullPriceOfLessons);
    const namesOfStudents = useSelector(selectMemoNamesOfStudents);
    const [studentName, setStudentName] = useState(namesOfStudents[0]);

    const amountOfLessonsForStudent = useSelector((state) => selectMemoAmountOfLessonsForStudent(state, studentName))
    const fullIncomePerStudent = useSelector((state) => selectMemoFullIncomePerStudent(state, studentName));
    const onselectStudentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStudentName(e.target.value);
    }

    return (
        <div className="flex flex-col">
            <p>All lessons: {amountOfLessons}</p>
            <p>Full price: {fullPriceOfLessons}</p>
            <div>
                <select 
                    defaultValue={namesOfStudents[0]} 
                    onChange={onselectStudentChange}
                >
                    {
                        namesOfStudents.map((name) => (
                            <option key={name}>
                                {name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <p>Amount of lessons for {studentName}: {amountOfLessonsForStudent}</p>
            <p>Full income for {studentName}: {fullIncomePerStudent}</p>
        </div>
    );
};

export { FullStatisticsPage } 
