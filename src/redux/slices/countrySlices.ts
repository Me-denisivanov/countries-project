import { IOptions } from './../../types/IOptions';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
	getCountries,
	getRegion,
	getSearchCountries,
} from '../asyncActions/countryAsyncActions';

export const options: IOptions[] = [
	{ value: 'africa', label: 'Africa' },
	{ value: 'americas', label: 'Americas' },
	{ value: 'asia', label: 'Asia' },
	{ value: 'europe', label: 'Europe' },
	{ value: 'oceania', label: 'Oceania' },
];

export interface CountryType {
	subregion: string;
	nativeName: string;
	name: string;
	capital: string;
	population: number;
	region: string;
	flags: Record<string, string>;
}

interface CountryState {
	countries: CountryType[];
	error: string;
	filtredValue: string;
}

const initialState: CountryState = {
	countries: [],
	error: '',
	filtredValue: '',
};

const countrySlice = createSlice({
	name: 'country',
	initialState,
	reducers: {
		setFilter(state, action: PayloadAction<string>) {
			state.filtredValue = action.payload || '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCountries.fulfilled, (state, { payload }) => {
				state.countries = payload;
			})
			.addCase(getCountries.rejected, (state, { payload }) => {
				state.error = payload as string;
			})
			// Filter Country
			.addCase(getRegion.fulfilled, (state, { payload }) => {
				state.countries = payload;
			})
			.addCase(getRegion.rejected, (state, { payload }) => {
				state.error = payload as string;
			})
			//Search
			.addCase(getSearchCountries.fulfilled, (state, { payload }) => {
				state.countries = payload;
			})
			.addCase(getSearchCountries.rejected, (state, { payload }) => {
				state.error = payload as string;
			});
	},
});

export const { setFilter } = countrySlice.actions;

export default countrySlice.reducer;
