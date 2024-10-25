import { JSX, ReactNode } from 'react';
import classes from './layout.module.scss';
import { FromInput } from '@features/seat-search-form/from-input';

type LayoutProps = {
	fromInput: ReactNode
}

export const Layout = ({ fromInput }: LayoutProps): JSX.Element => {
	return (
		<div className={classes['container']}>
			<FromInput/>
		</div>
	);
};
