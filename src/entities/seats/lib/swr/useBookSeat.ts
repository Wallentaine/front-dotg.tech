import useSWRMutation from 'swr/mutation';
import { bookSeat, BookSeatDto } from '@entities/seats/lib/api/seats.service';
import { notifications } from '@mantine/notifications';

export const useBookSeat = () => {
	const { trigger } = useSWRMutation(
		'book',
		(_key, { arg }: { arg: BookSeatDto }) => bookSeat(arg),
		{
			onSuccess: () => {
				notifications.show({
					title: 'Успех',
					message: 'Билет успешно забронирован',
					color: 'green'
				});
			},
			onError: () => {
				notifications.show({
					title: 'Ошибка',
					message: 'К сожалению, билет не удалось забронировать',
					color: 'red'
				});
			}
		}
	);
	return trigger;
};
