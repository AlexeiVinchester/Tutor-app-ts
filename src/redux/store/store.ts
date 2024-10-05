import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { persistedReducer } from "../persistReducer/persistReducer";
import { 
    persistStore, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});

const persistor = persistStore(store);

export { store, persistor };

const increment = createAction('counter/increment');
const decrement = createAction('counter/decrement');
const incrementByAmount = createAction<number>('counter/incrementByAmount');

const initialValue = {
  value: 0
}

export const counterReducer = createReducer(initialValue, (builder) => {
  builder.addCase(increment, (state) => {
    state.value++;
  })
  .addCase(decrement, (state) => {
    state.value--;
  })
  .addCase(incrementByAmount, (state, action) => {
    state.value += action.payload;
  })
})