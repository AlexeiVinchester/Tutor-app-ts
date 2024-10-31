import { createSlice } from "@reduxjs/toolkit";

interface ILoadingSlice {
    isLoading: boolean
}

const initialLoadingState: ILoadingSlice = {
    isLoading: false
}

const loadingSlice = createSlice({
    name: 'loadingFlag',
    initialState: initialLoadingState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        stopLoading(state) {
            state.isLoading = false;
        }
    }
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;