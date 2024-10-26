import { JSX } from 'react'
import { TrainSelect } from '@widgets/train-select/ui/train-select/TrainSelect';

type TrainPageProps = {}

export const TrainPage = ({}: TrainPageProps): JSX.Element => {
    return (
        <div>
	        <TrainSelect/>
        </div>
    );
};
