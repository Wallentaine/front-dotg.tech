import { JSX } from 'react';
import { TrainList } from '@entities/trains/ui/train-list/TrainList';

type TrainListProps = {}

export const TrainSelect = ({}: TrainListProps): JSX.Element => {

	return (
		<div>
			<TrainList/>
		</div>
	);
};
