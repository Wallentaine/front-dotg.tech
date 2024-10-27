import useSWRImmutable from 'swr/immutable';
import { getAllTrains, GetAllTrainsParams } from '@entities/trains/api/wagons.service';
import dayjs from 'dayjs';

export const useGetTrains = ({ to, date, from }: GetAllTrainsParams) => {
	const shouldFetch = [ to, date, from ].every(Boolean);
	const swrResponse = useSWRImmutable(
		shouldFetch
			? [ 'trains', from, to, date ]
			: null
		, ([ _key, from, to, date ]) => getAllTrains({ from, date: dayjs(date).add(3,'hours').toISOString(), to })
	);
	return {
		...swrResponse,
		data: swrResponse.data || []
	};
};
