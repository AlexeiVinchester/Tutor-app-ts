import { createSlice } from "@reduxjs/toolkit";
import { TSnackBarSeverity } from "../../../share/interfaces/snackBarSeverity.type";

interface ISnackMessageState {
    isOpen: boolean;
    severity: TSnackBarSeverity, // 'error' | 'success' | 'info' | 'warning'
    message: null | string;
}

const initialSnackMessageState: ISnackMessageState = {
    isOpen: false,
    severity: 'success',
    message: null
}

const shackMessageSlice = createSlice({
    name: 'snackMessage',
    initialState: { ...initialSnackMessageState },
    reducers: {
        showSnackMessage(state, action) {
            state.severity = action.payload.severity;
            state.message = action.payload.message;
            state.isOpen = true;
        },
        hideSnackMessage(state) { 
            state.isOpen = false;
            state.message = null;
            state.severity = initialSnackMessageState.severity;
        }
    }
});

export const {showSnackMessage, hideSnackMessage} = shackMessageSlice.actions;
export default shackMessageSlice.reducer;

