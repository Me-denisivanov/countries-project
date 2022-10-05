import React from 'react';
import { Link } from 'react-router-dom';
import { CountryType } from '../../redux/slices/countrySlices';
import cls from './CountryBlock.module.scss';

const CountryBlock = ({
	name,
	capital,
	population,
	region,
	flags,
}: CountryType) => {
	return (
		<div className={cls.main}>
			<Link to={name}>
				<div className={cls.container}>
					<div className={cls.main_image_block}>
						<img src={flags.png} alt='Country' />
					</div>
					<div className={cls.main_info_block}>
						<h3>{name}</h3>
						<div className={cls.main_list_block}>
							<p>
								<b>Population: </b>
								{population}
							</p>
							<p>
								<b>Region: </b>
								{region}
							</p>
							<p>
								<b>Capital: </b>
								{capital}
							</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CountryBlock;
