import React from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import { useAppSelector } from './redux/hooks';
import { getCurrentTheme } from './redux/slices/themeSlice';
import Search from './components/Search/Search';
import SelectField from './components/Select/SelectField';
import DetailsCountry from './pages/DetailsCountry/DetailsCountry';

function App() {
	const currentTheme = useAppSelector(getCurrentTheme);

	return (
		<div className={`app ${currentTheme}`}>
			<Header />

			<div className='main_fix'>
				<div className='filtered_blocks'>
					<Search />
					<SelectField />
				</div>
				<Routes>
					<Route path={'/'} element={<MainPage />} />
					<Route path={'/:id'} element={<DetailsCountry />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
