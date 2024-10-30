import { createSelector } from "reselect";
import { Store } from "../store/interface/store.interface";
import { ILesson } from "../../share/interfaces/lesson.interface";

/* Common selectors for lessons slice */

export const selectLessons = (state: Store) => state.lessons.allLessons;
export const selectAllLessonLoadedFlag = (state: Store) => state.lessons.allLessonsLoaded;
export const selectLoadingFlag = (state: Store) => state.lessons.loading;
export const selectErrorField = (state: Store) => state.lessons.error;

/* Selectors of statistics per full period of time*/

export const selectAmountOfLessons = (lessons: ILesson[]) => lessons.length;
export const selectMemoAmountOfLessons = createSelector(
    selectLessons,
    selectAmountOfLessons
);

export const selectFullPriceOfLessons = (lessons: ILesson[]) => lessons.reduce((cur, lesson) => cur + lesson.price, 0);
export const selectMemoFullPriceOfLessons = createSelector(
    selectLessons,
    selectFullPriceOfLessons
);

export const selectAllLessonsForStudent = (lessons: ILesson[], name: string) => lessons.filter((lesson) => lesson.name === name);

export const selectAmountOfLessonsForStudent = (lessons: ILesson[], name: string) => selectAllLessonsForStudent(lessons, name).length;
export const selectMemoAmountOfLessonsForStudent = createSelector(
    [
        selectLessons,
        (_, name) => name
    ],
    selectAmountOfLessonsForStudent
);

export const selectFullIncomePerStudent = (lessons: ILesson[], name: string) => {
    return selectAllLessonsForStudent(lessons, name).reduce((cur, lesson) => cur + lesson.price, 0);
};
export const selectMemoFullIncomePerStudent = createSelector(
    [
        selectLessons,
        (_, name) => name
    ],
    selectFullIncomePerStudent
);

/* Selectors for selective statistics */

const selectLessonsPerMonthAndYear = (lessons: ILesson[], year: string, month: string) => lessons.filter((lesson) => lesson.date.includes(`${year}-${month}-`));

const selectAmountOfLessonsPerMonthAndYear = (lessons: ILesson[], year: string, month: string) => selectLessonsPerMonthAndYear(lessons, year, month).length;
export const selectMemoAmountOfLessonsPerMonthAndYear = createSelector(
    selectLessons,
    (_, year) => year,
    (_, __, month) => month,
    selectAmountOfLessonsPerMonthAndYear
);

const selectFullIncomeForMonthAndYear = (lessons: ILesson[], year: string, month: string) => {
    return selectLessonsPerMonthAndYear(lessons, year, month)
        .reduce((cur, lesson) => cur + lesson.price, 0);
};

export const memoSelectFullIncomeForMonthAndYear = createSelector(
    selectLessons,
    (_, year) => year,
    (_, __, month) => month,
    selectFullIncomeForMonthAndYear
);

const selectLessonsPerStudentPerMonthAndYear = (lessons: ILesson[], name: string, year: string, month: string,) => {
    return selectLessonsPerMonthAndYear(lessons, year, month)
        .filter((lesson) => lesson.name === name);
};

const selectAmountOfLessonsPerStudentPerMonthAndYear = (lessons: ILesson[], name: string, year: string, month: string) => {
    return selectLessonsPerStudentPerMonthAndYear(lessons, name, year, month).length;
};

export const memoizedSelectAmountOfLessonsPerStudentPerMonthAndYear = createSelector(
    [
        selectLessons,
        (_, name) => name,
        (_, __, year) => year,
        (_, __, ___, month) => month,
    ],
    selectAmountOfLessonsPerStudentPerMonthAndYear
);

const selectIncomePerStudentPerMonthAndYear = (lessons: ILesson[], name: string, year: string, month: string) => {
    return selectLessonsPerStudentPerMonthAndYear(lessons, name, year, month)
        .reduce((cur, lesson) => cur + lesson.price, 0);
}

export const memoizedSelectIncomePerStudentPerMonthAndYear = createSelector(
    [
        selectLessons,
        (_, name) => name,
        (_, __, year) => year,
        (_, __, ___, month) => month,
    ],
    selectIncomePerStudentPerMonthAndYear
);

const selectUnpaidLessonsPerStudentPerMonthAndYear = (lessons: ILesson[], name: string, year: string, month: string) => {
    return selectLessonsPerStudentPerMonthAndYear(lessons, name, year, month)
        .filter((lesson) => !lesson.paidStatus);
}

export const memoizedSelectUnpaidLessonsPerStudentPerMonthAndYear = createSelector(
    [
        selectLessons,
        (_, name) => name,
        (_, __, year) => year,
        (_, __, ___, month) => month,
    ],
    selectUnpaidLessonsPerStudentPerMonthAndYear
);

const selectStudentsForMonthAndYear = (lessons: ILesson[], year: string, month: string) => {
    return Array.from(new Set(selectLessonsPerMonthAndYear(lessons, year, month)
        .map((lesson) => lesson.name)));
};

export const memoizedSelectStudentsForMonthAndYear = createSelector(
    [
        selectLessons,
        (_, year) => year,
        (_, __, month) => month,
    ],
    selectStudentsForMonthAndYear
);


