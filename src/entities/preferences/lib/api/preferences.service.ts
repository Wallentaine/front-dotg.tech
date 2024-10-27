import { mainApi } from '@shared/api';

export type CreatePreferenceDto = {
	dateFrom: string,
	dateTo: string,
	from: string,
	to: string,
	priceFrom: number,
	priceTo: number,
	wagonType: string,
	seatCount: number
}

export const createPreference = async (body: CreatePreferenceDto) => {
	const { data } = await mainApi.post<CreatePreferenceDto>('/g/booking/stand-queue', { body });
	return data;
};