import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducers/RootReducer";

const store = configureStore({
    reducer: rootReducer,
});

type TStateType = ReturnType<typeof store.getState>;
type TDispatch = typeof store.dispatch;

export { store };
export type { TStateType, TDispatch };
