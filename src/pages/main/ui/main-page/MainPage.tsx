import { JSX } from 'react';
import classes from './mainPage.module.scss';
import { Outlet } from 'react-router-dom';

type MainPageProps = {}

export const MainPage = ({}: MainPageProps): JSX.Element => {

	return (
		<div className={classes['layout']}>
			<Outlet/>
		</div>
	);
};

export default MainPage;