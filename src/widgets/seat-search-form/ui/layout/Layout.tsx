import { JSX, ReactNode } from 'react';
import classes from './layout.module.scss';

type LayoutProps = {
	fromInput: ReactNode
	toInput: ReactNode
	submitButton: ReactNode
	transferButton: ReactNode
	arriveDateInput: ReactNode
}

export const Layout = ({
	fromInput,
	toInput,
	submitButton,
	transferButton,
	arriveDateInput,
}: LayoutProps): JSX.Element => {
	return (
		<div className={classes['container']}>
			<div className={classes['container__inputs']}>
				<div className={classes['container__inputsDestination']}>
					{fromInput}
					{transferButton}
					{toInput}
				</div>
				<div className={classes['container__inputsDate']}>
					{arriveDateInput}
				</div>
			</div>
			<div>
				{submitButton}
			</div>
		</div>
	);
};
