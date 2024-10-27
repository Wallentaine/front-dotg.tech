import { JSX, ReactNode } from 'react';
import classes from './notFoundTrainsLayout.module.scss';

type NotFoundTrainsProps = {
	departure: string
	destination: string
	date: string
	queueButton: ReactNode
}

export const NotFoundTrainsLayout = ({
	date,
	departure,
	destination,
	queueButton
}: NotFoundTrainsProps): JSX.Element => {
	return (
		<div className={classes['layout']}>
			<div className={classes['container']}>
	        <span className={classes['title']}>
		        Билетов по железнодорожному рейсу {departure} - {destination} на {date} не найдено
	        </span>
				<div className={classes['actions']}>
					{queueButton}
				</div>
			</div>
		</div>

	);
};
