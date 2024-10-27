import useSWRMutation from 'swr/mutation';
import { createPreference } from '@entities/preferences/lib/api/preferences.service';
import { notifications } from '@mantine/notifications';

export const useCreatePreference = () => {
	const { trigger } = useSWRMutation(
		'preference',
		(_key, { arg }: { arg: any }) => createPreference(arg),
		{
			onSuccess: () => notifications.show({
				message: 'Желаемое место отслеживается',
				title: 'Успех',
				color: 'green'
			})
		}
	);
	return trigger;
};