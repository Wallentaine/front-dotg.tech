import { getAllTrains, GetAllTrainsParams } from '@entities/trains/api/wagons.service';
import dayjs from 'dayjs';
import useSWR from 'swr';
import json from 'mock.json'
export const useGetTrains = ({ to, date, from }: GetAllTrainsParams) => {
	const shouldFetch = [ to, date, from ].every(Boolean);
	const swrResponse = useSWR(
		shouldFetch
			? [ 'trains', from, to, date ]
			: null,
		([ _key, from, to, date ]) => getAllTrains({ from, date: dayjs(date).add(3, 'hours').toISOString(), to }),
		{ refreshInterval: 5000, }
	);
	const isValidAnswer = swrResponse.data && typeof swrResponse.data ==='object';
	return {
		...swrResponse,
		data: isValidAnswer ? swrResponse.data : []
	};
};
