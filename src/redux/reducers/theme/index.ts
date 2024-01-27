import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  isDarkMode: false,
  theme: "system"
};

const initialState = {
  theme: localStorage.getItem("theme") || defaultState.theme,
  isDarkMode: false
};

const themeConfigSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme(state, { payload }) {
      payload = payload || state.theme; // light | dark | system
      localStorage.setItem("theme", payload);
      state.theme = payload;
      if (payload === "light") {
        state.isDarkMode = false;
      } else if (payload === "dark") {
        state.isDarkMode = true;
      } else if (payload === "system") {
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          state.isDarkMode = true;
        } else {
          state.isDarkMode = false;
        }
      }

      if (state.isDarkMode) {
        document.querySelector("body")?.classList.add("dark");
      } else {
        document.querySelector("body")?.classList.remove("dark");
      }
    }
  }
});

export const { toggleTheme } = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
