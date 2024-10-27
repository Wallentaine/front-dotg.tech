import { JSX, PropsWithChildren } from 'react';
import { usePreferencesModalStore } from '@entities/preferences/lib/store/PreferencesModalStore';
import { useShallow } from 'zustand/react/shallow';
import { Modal, ScrollArea } from '@mantine/core';

export const PreferencesFormModal = ({ children }: PropsWithChildren): JSX.Element => {

	const [ close, isOpen ] = usePreferencesModalStore(useShallow(({ close, isOpen }) => [ close, isOpen ]));

	return (
		<Modal
			opened={isOpen}
			onClose={close}
			centered
			size={'700px'}
			styles={{header: {display: 'none'}}}
			scrollAreaComponent={ScrollArea.Autosize}
			yOffset={0}
			radius={'lg'}
		>
			{children}
		</Modal>
	);
};
