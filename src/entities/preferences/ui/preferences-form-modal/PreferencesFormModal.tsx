import { JSX, PropsWithChildren } from 'react';
import { usePreferencesModalStore } from '@entities/preferences/lib/store/PreferencesModalStore';
import { useShallow } from 'zustand/react/shallow';
import { Modal, ScrollArea } from '@mantine/core';

type PreferencesFormModalProps = {
	onClose?: () => void
} & PropsWithChildren

export const PreferencesFormModal = ({ children, onClose }: PreferencesFormModalProps): JSX.Element => {

	const [ close, isOpen ] = usePreferencesModalStore(useShallow(({ close, isOpen }) => [ close, isOpen ]));

	const handleClose = () => {
		onClose && onClose();
		close();
	};

	return (
		<Modal
			opened={isOpen}
			onClose={handleClose}
			centered
			size={'700px'}
			styles={{ header: { display: 'none' } }}
			scrollAreaComponent={ScrollArea.Autosize}
			yOffset={0}
			radius={'lg'}
		>
			{children}
		</Modal>
	);
};
