import { mainApi } from '@shared/api';

export type BookSeatDto = {
	train_id: number,
	wagon_id: number,
	seat_id: number
}

export const bookSeat = async (body: BookSeatDto) => {

	const { data } = await mainApi.post('/g/booking/book', { body });
	return data;
};