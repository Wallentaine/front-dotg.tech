import { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { Header } from '@app/ui/header/Header';
import classes from './appLayout.module.scss';
import { SeatSearchForm } from '@widgets/seat-search-form';

export const AppLayout = (): JSX.Element => {

	return (
		<AppShell header={{ height: '81px' }} className={classes['layout']}>
			<Header/>
			<AppShell.Main>
				<div className={classes['searchContainer']}>
					<SeatSearchForm/>
				</div>
				<div className={classes['main__content']}>
					<Outlet/>
				</div>
			</AppShell.Main>
		</AppShell>
	);
};
