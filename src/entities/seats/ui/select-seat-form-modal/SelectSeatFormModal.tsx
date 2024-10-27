import { JSX, PropsWithChildren } from 'react';
import { Modal, ScrollArea } from '@mantine/core';
import { useShallow } from 'zustand/react/shallow';
import { useSelectSeatFormModalStore } from '@entities/seats/lib/store/SelectSeatFormModalStore';

type SelectSeatFormModalProps = {
	onClose?: () => void
} & PropsWithChildren

export const SelectSeatFormModal = ({ children, onClose }: SelectSeatFormModalProps): JSX.Element => {

	const [ close, isOpen ] = useSelectSeatFormModalStore(useShallow(({ close, isOpen }) => [ close, isOpen ]));

	return (
		<Modal
			opened={isOpen}
			onClose={() => {
				onClose && onClose();
				close();
			}}
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
