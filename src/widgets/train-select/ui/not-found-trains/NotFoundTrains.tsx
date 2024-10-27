import { JSX } from 'react';
import { QueueButton } from '@features/not-found-trains/queue-button/QueueButton';
import { NotFoundTrainsLayout } from '@entities/trains/ui/not-found-trains/NotFoundTrainsLayout';
import { useFilterStore } from '@entities/filters/lib/store/FiltersStore';
import { useShallow } from 'zustand/react/shallow';
import dayjs from 'dayjs';
import { NotFound } from '@shared/components/not-found';
import { replace } from "react-router-dom";
import { RoutesKeys } from '@app/lib/consts/routes';
type NotFoundTrainsProps = {}

export const NotFoundTrains = ({}: NotFoundTrainsProps): JSX.Element => {

	const savedFilters = useFilterStore(useShallow(({
		savedFilters
	}) => savedFilters));


	if (!savedFilters) {
		return <NotFound/>
	}

	const { departureDate, destination, departure } = savedFilters;

	return (
		<NotFoundTrainsLayout
			date={dayjs(departureDate).locale('ru').format('D MMMM')}
			departure={departure}
			destination={destination}
			queueButton={<QueueButton/>}
		/>
	);
};
