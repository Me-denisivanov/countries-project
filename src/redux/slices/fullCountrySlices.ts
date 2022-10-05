import { getOneCountriesBySearch } from './../asyncActions/countryAsyncActions';
import { CountryType } from './countrySlices';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface CountryState {
	detailCountries: CountryType[];
	error: string;
}

const initialState: CountryState = {
	detailCountries: [],
	error: '',
};

const countrySlice = createSlice({
	name: 'country',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getOneCountriesBySearch.fulfilled, (state, { payload }) => {
				state.detailCountries = payload;
			})
			.addCase(getOneCountriesBySearch.rejected, (state, { payload }) => {
				state.error = payload as string;
			});
	},
});

// export const { setFilter } = countrySlice.actions;

export default countrySlice.reducer;
