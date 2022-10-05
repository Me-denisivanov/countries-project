import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum ThemesEnum {
  LIGHT = "light",
  DARK = "dark",
}

const LOCAL_STORAGE_THEME_KEY = "theme";
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemesEnum) ||
  ThemesEnum.LIGHT;

const initialState = {
  theme: ThemesEnum,
  currentTheme: defaultTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      if (state.currentTheme === state.theme.LIGHT) {
        state.currentTheme = state.theme.DARK;
      } else {
        state.currentTheme = state.theme.LIGHT;
      }

      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, state.currentTheme);
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const getCurrentTheme = (state: RootState) => state.theme.currentTheme;
export default themeSlice.reducer;
