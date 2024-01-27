import { configureStore } from "@reduxjs/toolkit";
import themeConfigSlice from "./reducers/theme";

export const store = configureStore({
  reducer: {
    themeConfig: themeConfigSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
