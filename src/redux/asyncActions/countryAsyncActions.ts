import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../api/instance';
import { CountryType } from '../slices/countrySlices';

export const getCountries = createAsyncThunk<
	CountryType[],
	undefined,
	{ rejectValue: string }
>('countries/getCountries', async (_, { rejectWithValue }) => {
	try {
		const { data } = await instance.get('all');
		return data;
	} catch (e: any) {
		return rejectWithValue(e.message);
	}
});

export const getRegion = createAsyncThunk<
	CountryType[],
	string,
	{ rejectValue: string }
>('countries/getRegion', async (params, { rejectWithValue }) => {
	try {
		const { data } = await instance.get(`region/${params}`);
		return data;
	} catch (e: any) {
		return rejectWithValue(e.message);
	}
});

export const getSearchCountries = createAsyncThunk<
	CountryType[],
	string,
	{ rejectValue: string }
>('countries/getSearchCountries', async (params, { rejectWithValue }) => {
	try {
		const { data } = await instance.get(`name/${params}`);
		return data;
	} catch (e: any) {
		return rejectWithValue(e.message);
	}
});

export const getOneCountriesBySearch = createAsyncThunk<
	CountryType[],
	string,
	{ rejectValue: string }
>('countries/getOneCountriesBySearch', async (params, { rejectWithValue }) => {
	try {
		const { data } = await instance.get(`name/${params}?fullText=true`);
		return data;
	} catch (e: any) {
		return rejectWithValue(e.message);
	}
});
