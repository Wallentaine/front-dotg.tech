import { useGetWagons } from '@entities/trains/swr/useGetWagons';
import { useSelectSeatFormModalStore } from '@entities/seats/lib/store/SelectSeatFormModalStore';

export const useGetSeats = (wagonId: number) => {

	const trainId = useSelectSeatFormModalStore(({ trainId }) => trainId);

	const wagons = useGetWagons(trainId);

	const currentWagon = wagons.find((wagon) => wagon.wagon_id === wagonId);

	return currentWagon?.seats || [];
};