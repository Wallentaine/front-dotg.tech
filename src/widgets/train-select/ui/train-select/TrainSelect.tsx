import { JSX } from 'react';
import { TrainList } from '@entities/trains/ui/train-list/TrainList';
import { PreferencesForm } from '@widgets/preferences-form/ui/PreferencesForm';

type TrainListProps = {}

export const TrainSelect = ({}: TrainListProps): JSX.Element => {
	return (
		<div>
			<TrainList/>
			<PreferencesForm/>
		</div>
	);
};
