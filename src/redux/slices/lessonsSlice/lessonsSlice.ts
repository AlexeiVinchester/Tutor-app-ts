import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILesson } from "../../../share/interfaces/lesson.interface";
import { AppDispatch, RootState } from "../../store/store";

const loadAllLessons: AsyncThunk<ILesson[], string, { dispatch: AppDispatch, state: RootState }> = createAsyncThunk(
    'lessons/loadLessons',
    async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
);

interface IInitialLessonsSlice {
    allLessons: ILesson[],
    loading: boolean,
    error: null | string | undefined,
    allLessonsLoaded: boolean,
}

const initialLessonsSlice: IInitialLessonsSlice = {
    allLessons: [{
        id: 0,
        name: '',
        date: '',
        price: 30,
        paidStatus: false
    }],
    loading: false,
    error: null,
    allLessonsLoaded: false
}

export const lessonsSlice = createSlice({
    name: 'lessons',
    initialState: { ...initialLessonsSlice },
    reducers: {
        addNewLesson(state, action) {
            state.allLessons.push(action.payload);
        },
        editLesson(state, action) {
            const editedIndex = state.allLessons.findIndex((item) => item.id === action.payload.id);
            state.allLessons[editedIndex] = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadAllLessons.pending, (state) => {
                state.loading = true
            })
            .addCase(loadAllLessons.fulfilled, (state, action) => {
                state.allLessons = action.payload;
                state.loading = false;
                state.allLessonsLoaded = true;
            })
            .addCase(loadAllLessons.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
});

export { loadAllLessons };
export const { addNewLesson, editLesson } = lessonsSlice.actions
export default lessonsSlice.reducer;