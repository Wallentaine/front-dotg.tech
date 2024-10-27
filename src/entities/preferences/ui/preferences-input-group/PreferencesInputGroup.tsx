import { JSX, ReactNode } from 'react';
import classes from './preferencesInputGroup.module.scss';

type PreferencesInputGroupProps = {
	left: ReactNode
	right: ReactNode
}

export const PreferencesInputGroup = ({ left, right, }: PreferencesInputGroupProps): JSX.Element => {
	return (
		<div className={classes['container']}>
			<div className={classes['inputs']}>
				<div style={{ width: '50%' }}>
					{left}
				</div>
				<div style={{ width: '50%' }}>
					{right}
				</div>

			</div>
		</div>
	);
};
