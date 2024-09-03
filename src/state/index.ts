import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IntialStateTtoes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: IntialStateTtoes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
