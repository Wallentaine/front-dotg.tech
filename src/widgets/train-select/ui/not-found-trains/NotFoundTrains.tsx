import { JSX } from 'react';
import { QueueButton } from '@features/not-found-trains/queue-button/QueueButton';
import { NotFoundTrainsLayout } from '@entities/trains/ui/not-found-trains/NotFoundTrainsLayout';

type NotFoundTrainsProps = {}

export const NotFoundTrains = ({}: NotFoundTrainsProps): JSX.Element => {

	return (
		<NotFoundTrainsLayout
			date={'21.12.2001'}
			departure={'Москва'}
			destination={'Владивосток'}
			neighbourSelect={<div>assdasd</div>}
			queueButton={<QueueButton/>}
		/>
	);
};
