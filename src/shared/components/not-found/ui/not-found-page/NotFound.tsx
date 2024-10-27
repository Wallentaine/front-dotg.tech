import { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesKeys } from '@app/lib/consts/routes';
import classes from './notFoundPage.module.scss';

export const NotFound = (): JSX.Element => {

	return (
		<div className={classes['container']}>
			<span>Произошла ошибка</span>
			<NavLink to={RoutesKeys.MAIN}>
				Вернуться на главную
			</NavLink>
		</div>
	);
};
