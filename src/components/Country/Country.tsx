import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCountries } from '../../redux/asyncActions/countryAsyncActions';
import CountryBlock from '../CountryBlock/CountryBlock';
import cls from './Country.module.scss';

const Country = () => {
	const dispatch = useAppDispatch();
	const { countries, error } = useAppSelector((state) => state.country);

	useEffect(() => {
		dispatch(getCountries());
	}, [dispatch]);

	return (
		<div className={cls.container}>
			<div className={cls.country}>
				{countries &&
					countries.map((item) => <CountryBlock key={item.name} {...item} />)}
			</div>
		</div>
	);
};

export default Country;
