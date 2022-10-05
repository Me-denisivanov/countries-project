import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SearchState {
  searchValue: string;
}

const initialState: SearchState = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setValueSearch(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setValueSearch } = searchSlice.actions;

export const getSearchValue = (state: RootState) => state.search.searchValue;

export default searchSlice.reducer;
