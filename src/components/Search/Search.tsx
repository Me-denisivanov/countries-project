import React from 'react';
import cls from './Search.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getSearchValue, setValueSearch } from '../../redux/slices/searchSlice';
import {
	getCountries,
	getSearchCountries,
} from '../../redux/asyncActions/countryAsyncActions';

const Search = () => {
	const dispatch = useAppDispatch();

	const searchValue = useAppSelector(getSearchValue);

	const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setValueSearch(e.target.value));
	};

	React.useEffect(() => {
		if (searchValue) {
			dispatch(getSearchCountries(searchValue));
		} else {
			dispatch(getCountries());
		}
	}, [dispatch, searchValue]);

	return (
		<label htmlFor='' className={cls.search_main_block}>
			<i className={`material-icons ${cls.search_icon}`}>search</i>
			<input
				type='text'
				placeholder='Search for a country...'
				className={cls.search_input_block}
				onChange={handleValue}
			/>
		</label>
	);
};

export default Search;
