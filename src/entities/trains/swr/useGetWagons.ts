import { useFilterStore } from '@entities/filters/lib/store/FiltersStore';
import { useGetTrains } from '@entities/trains/swr/useGetTrains';

export const useGetWagons = (trainId: number | null) => {

	const savedFilters = useFilterStore(({ savedFilters }) => savedFilters);

	const { data: trains } = useGetTrains({
		to: savedFilters?.destination,
		date: savedFilters?.departureDate,
		from: savedFilters?.departure
	});

	const currentTrain = trains.find(train => train.train_id === trainId);

	return currentTrain?.wagons_info || [];

};