import { TStateType } from "../../../../app/store/Store";

const topLeadersCurrentAmountSelector = (state: TStateType ) => state.topLeaders.topLeadersCurrentAmount;
const topLeadersCurrentModeSelector = (state: TStateType ) => state.topLeaders.topLeadersCurrentMode;

export { 
  topLeadersCurrentAmountSelector, 
  topLeadersCurrentModeSelector,
};