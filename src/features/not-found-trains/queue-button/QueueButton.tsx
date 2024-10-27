import { JSX } from 'react';
import { Button } from '@mantine/core';
import { usePreferencesModalStore } from '@entities/preferences/lib/store/PreferencesModalStore';
import { useShallow } from 'zustand/react/shallow';


export const QueueButton = (): JSX.Element => {

	const open = usePreferencesModalStore(useShallow(({ open }) => open));

	return (
		<Button
			size={'lg'}
			radius={'md'}
			onClick={open}
		>
			Встать в очередь
		</Button>
	);
};
