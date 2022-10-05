import React from 'react';
import Select, { SingleValue } from 'react-select';
import cls from './SelectField.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
	getCountries,
	getRegion,
} from '../../redux/asyncActions/countryAsyncActions';
import { options, setFilter } from '../../redux/slices/countrySlices';
import { IOptions } from '../../types/IOptions';

const SelectField = () => {
	const dispatch = useAppDispatch();
	const { filtredValue } = useAppSelector((state) => state.country);

	const getSelect = (newValue: SingleValue<IOptions>) => {
		if (newValue) {
			dispatch(setFilter(newValue.value));
		} else {
			dispatch(getCountries());
		}

		if (newValue && newValue.value !== filtredValue) {
			dispatch(getRegion(newValue.value));
		}
	};

	return (
		<Select
			classNamePrefix='custom-select'
			// classNamePrefix={cls.custom_select}
			options={options}
			isClearable={true}
			className={cls.select_block}
			onChange={getSelect}
		/>
	);
};

export default SelectField;
