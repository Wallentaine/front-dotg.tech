import { mainApi } from '@shared/api';
import { Train } from '@entities/trains/types/Train.types';

export type GetAllTrainsParams = {
	from: string
	to: string
	date: string
}

export const getAllTrains = async (params: GetAllTrainsParams): Promise<Train[]> => {
	const { data } = await mainApi.get<Train[]>('/g/booking/search', {
		params
	});
	console.log(data);
	return data;
};