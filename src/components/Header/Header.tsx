import React from 'react';
import cls from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeTheme, getCurrentTheme } from '../../redux/slices/themeSlice';

const Header = () => {
	const dispatch = useAppDispatch();
	const currentTheme = useAppSelector(getCurrentTheme);

	const toggleTheme = () => {
		dispatch(changeTheme());
	};

	return (
		<div className={cls.header}>
			<div className={cls.container}>
				<Link to='/' className={cls.links}>
					Where is the world?
				</Link>
				<button onClick={toggleTheme}>
					{currentTheme === 'light' ? 'Светлая тема' : 'Темная тема'}
				</button>
			</div>
		</div>
	);
};

export default Header;
