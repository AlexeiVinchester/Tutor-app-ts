import { combineReducers } from "@reduxjs/toolkit";
import TopLeadersReducer from "../../../widgets/StatisticsPage/TopLeadersWidget/model/TopLeadersSlice";

const rootReducer = combineReducers({
    topLeaders: TopLeadersReducer,
});

export { rootReducer }