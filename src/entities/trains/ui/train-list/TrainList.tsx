import { JSX } from 'react';
import { Trains } from '@entities/trains/lib/mocks/Train.mock';
import { TrainItem } from '@entities/trains/ui/train-item/TrainItem';
import classes from './trainList.module.scss';

export const TrainList = (): JSX.Element => {

	const trains = Trains;

	return (
		<div className={classes['list']}>
			{trains.map((train) =>
				<TrainItem {...train}/>
			)}
		</div>
	);
};
