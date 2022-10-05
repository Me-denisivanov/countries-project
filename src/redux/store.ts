import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import countryReducer from './slices/countrySlices';
import searchReducer from './slices/searchSlice';
import fullCountryReducer from './slices/fullCountrySlices';

const store = configureStore({
	reducer: {
		theme: themeReducer,
		country: countryReducer,
		search: searchReducer,
		fullCountry: fullCountryReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
