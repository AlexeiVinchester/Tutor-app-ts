
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTopLeadersAmount, TTopLeadersMode } from "../../../../entities/topLeader/model/TopLeader.type";

interface ITopLeadersState {
    topLeadersCurrentAmount: TTopLeadersAmount;
    topLeadersCurrentMode: TTopLeadersMode;
}

const initialState: ITopLeadersState = {
    topLeadersCurrentAmount: 3,
    topLeadersCurrentMode: "amount",
}

const TopLeadersSlice = createSlice({
    name: "topLeaders",
    initialState,
    reducers: {
        toggleTopLeadersMode: (state, action: PayloadAction<TTopLeadersMode>) => {
            state.topLeadersCurrentMode = action.payload;
        },
        toggleTopLeadersAmount: (state, action: PayloadAction<TTopLeadersAmount>) => {
            state.topLeadersCurrentAmount = action.payload;
        }
    },
});

const { toggleTopLeadersMode, toggleTopLeadersAmount } = TopLeadersSlice.actions;

export {
    toggleTopLeadersMode,
    toggleTopLeadersAmount, 
}; 
export default TopLeadersSlice.reducer;