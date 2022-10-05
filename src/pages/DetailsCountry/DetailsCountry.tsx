import React from 'react';
import cls from './DetailsCountry.module.scss';

import { useNavigate, useParams } from 'react-router-dom';
import { getOneCountriesBySearch } from '../../redux/asyncActions/countryAsyncActions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const DetailsCountry = () => {
	const dispatch = useAppDispatch();
	const { detailCountries } = useAppSelector((state) => state.fullCountry);

	const { id } = useParams();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (id) {
			dispatch(getOneCountriesBySearch(id));
		}
	}, [dispatch, id]);

	const goBack = () => {
		navigate(-1);
	};

	return (
		<>
			<div className={cls.button_back} onClick={goBack}>
				<button>Back</button>
			</div>
			{detailCountries.map((item) => (
				<>
					<div className={cls.main}>
						<div className={cls.main__image_block}>
							<img src={item.flags.svg} alt='Country' />
						</div>
						<div className={cls.main__info_block}>
							<h3>{item.name}</h3>
							<ul>
								<li>
									<span>Native Name:</span> {item.name}
								</li>
								<li>
									<span>Population:</span> {item.nativeName}
								</li>
								<li>
									<span>Region:</span> {item.region}
								</li>
								<li>
									<span>Sub Region:</span> {item.subregion}
								</li>
								<li>
									<span>Capiital:</span> {item.capital}
								</li>
							</ul>
						</div>
					</div>
				</>
			))}
		</>
	);
};

export default DetailsCountry;
