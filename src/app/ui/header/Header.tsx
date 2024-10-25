import { JSX } from 'react';
import TrainSvg from '@shared/svg/train.svg?react';
import classes from './header.module.scss';
import { Navbar } from '@app/ui/navbar/Navbar';
import { AppShell } from '@mantine/core';

export const Header = (): JSX.Element => {
	return (

		<AppShell.Header className={classes['header']}>
			<div className={classes['header__content']}>
				<span className={classes['header__logo']}>
					Ж/Д <TrainSvg/> Путешествия
				</span>
				<Navbar/>
			</div>
		</AppShell.Header>


	);
};
