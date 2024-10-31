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
        showLoadingInSnack(state) {
            state.isLoading = true;
        },
        hideLoadingInSnack(state){
            state.isLoading = false;
        }
    }
});

export const {showLoadingInSnack, hideLoadingInSnack} = loadingSlice.actions;
export default loadingSlice.reducer;