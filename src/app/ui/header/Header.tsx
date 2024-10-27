import { JSX } from 'react';
import TrainSvg from '@shared/svg/train.svg?react';
import classes from './header.module.scss';
import { Navbar } from '@app/ui/navbar/Navbar';
import { AppShell } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { RoutesKeys } from '@app/lib/consts/routes';

export const Header = (): JSX.Element => {
	return (
		<AppShell.Header className={classes['header']}>
			<div className={classes['header__content']}>
				<NavLink to={RoutesKeys.MAIN} style={{textDecoration: 'none', color: '#000'}}>
					<span className={classes['header__logo']}>
						Ж/Д <TrainSvg/> Путешествия
				</span>
				</NavLink>
				{/*<Navbar/>*/}
			</div>
		</AppShell.Header>
	);
};
