import { JSX } from 'react';
import { Station } from '@entities/trains/lib/types/Train.types';
import classes from './stationInfo.module.scss';

type StationInfoProps = Station

export const StationInfo = ({ date, station, time }: StationInfoProps): JSX.Element => {
	return (
		<div className={classes['container']}>
			<div className={classes['dateTime']}>
				<span className={classes['dateTime__time']}>{time}</span>
				<span className={classes['dateTime__date']}>{date}</span>
			</div>
			<div className={classes['station']}>
				{station}
			</div>
		</div>
	);
};
