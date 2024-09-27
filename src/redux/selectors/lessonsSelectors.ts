import { createSelector } from "reselect";
import { Store } from "../store/interface/store.interface";
import { ILesson } from "../../share/interfaces/lesson.interface";

export const selectLessons = (state: Store) => state.lessons;

export const selectAmountOfLessons = (lessons: ILesson[]) => lessons.length;
export const selectMemoAmountOfLessons = createSelector(selectLessons, selectAmountOfLessons);

export const selectFullPriceOfLessons = (lessons: ILesson[]) => lessons.reduce((cur, lesson) => cur + lesson.price, 0);
export const selectMemoFullPriceOfLessons = createSelector(selectLessons, selectFullPriceOfLessons);

export const selectAllLessonsForStudent = (lessons: ILesson[], name: string) => lessons.filter((lesson) => lesson.name === name);

export const selectAmountOfLessonsForStudent = (lessons: ILesson[], name: string) => selectAllLessonsForStudent(lessons, name).length;
export const selectMemoAmountOfLessonsForStudent = createSelector([selectLessons, (_, name) => name], selectAmountOfLessonsForStudent);

export const selectFullIncomePerStudent = (lessons: ILesson[], name: string) => {
    return selectAllLessonsForStudent(lessons, name).reduce((cur, lesson) => cur + lesson.price, 0);
};
export const selectMemoFullIncomePerStudent = createSelector([selectLessons, (_, name) => name], selectFullIncomePerStudent);

// selectors for selective statistics

const selectLessonsPerMonthAndYear = (lessons: ILesson[], year: string, month: string) => lessons.filter((lesson) => lesson.date.includes(`${year}-${month}-`));
export const memoSelectLessonsPerMonthAndYear = createSelector(
    selectLessons,
    (_, year) => year,
    (_, __, month) => month,
    selectLessonsPerMonthAndYear
);

const selectAmountOfLessonsPerMonthAndYear = (lessons: ILesson[], year: string, month: string) => lessons.filter((lesson) => lesson.date.includes(`${year}-${month}-`)).length;
export const selectMemoAmountOfLessonsPerMonthAndYear = createSelector(selectLessons, (_, year) => year, (_, __, month) => month, selectAmountOfLessonsPerMonthAndYear);


const selectFullIncomeForMonthAndYear = (lessons: ILesson[], year: string, month: string) => {
    return lessons.filter((lesson) => lesson.date.includes(`${year}-${month}-`))
        .reduce((cur, lesson) => cur + lesson.price, 0);
};

export const memoSelectFullIncomeForMonthAndYear = createSelector(
    selectLessons,
    (_, year) => year,
    (_, __, month) => month,
    selectFullIncomeForMonthAndYear
)
