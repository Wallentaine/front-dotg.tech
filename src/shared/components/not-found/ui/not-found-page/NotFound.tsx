import { JSX } from 'react';
import classes from './notFoundPage.module.scss';
import { usePreferencesModalStore } from '@entities/preferences/lib/store/PreferencesModalStore';
import { useShallow } from 'zustand/react/shallow';
import { Button } from '@mantine/core';

export const NotFound = (): JSX.Element => {
	const open = usePreferencesModalStore(useShallow(({ open }) => open));

	return (
		<div className={classes['layout']}>
			<div className={classes['container']}>
				<span className={classes['title']}>Выберите откуда и куда вы хотите поехать, и дату отъезда. Или встаньте в очередь на бронь билета.</span>
				<Button
					size={'lg'}
					radius={'md'}
					onClick={open}
				>
					Забронировать
				</Button>
			</div>
		</div>

	);
};
