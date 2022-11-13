import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainSlice from "./mainStore/mainSlice";
import filmsSlice from "./filmsStore/filmsSlice";

const rootReducer = combineReducers({
  user: mainSlice,
  films: filmsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatchType = typeof store.dispatch;

export type AppStateType = ReturnType<typeof rootReducer>;
