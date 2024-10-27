import { JSX } from 'react';
import { SelectSeatFormModal } from '@entities/seats/ui/select-seat-form-modal/SelectSeatFormModal';
import { useSelectSeatFormModalStore } from '@entities/seats/lib/store/SelectSeatFormModalStore';
import { useShallow } from 'zustand/react/shallow';
import Form from '@shared/react-hook-form/components/form/Form';
import { useForm } from 'react-hook-form';
import { Button, Text } from '@mantine/core';
import { WagonNumberSelect } from '@features/wagon-number-select/WagonNumberSelect';
import { WagonSelect } from '@features/preferences/wagon-select/WagonSelect';
import classes from './selectSeatForm.module.scss';
import { SeatSchemeSelect } from '@features/preferences/seat-scheme-select/SeatSchemeSelect';
import { usePreferencesModalStore } from '@entities/preferences/lib/store/PreferencesModalStore';
import { useBookSeat } from '@entities/seats/lib/swr/useBookSeat';

type SelectSeatFormProps = {}

type BookSeatForm = {
	trainId: number
	wagonId: number
	seatId: number
}

export const SelectSeatForm = ({}: SelectSeatFormProps): JSX.Element => {

	const methods = useForm();

	const openPreferences = usePreferencesModalStore(({ open }) => open);

	const bookSeat = useBookSeat();

	const [ closeModal ] = useSelectSeatFormModalStore(useShallow(({ trainId, close }) => [ close ]));
	const handleSubmit = (data: BookSeatForm) => {
		bookSeat({
			seat_id: data.seatId,
			train_id: data.trainId,
			wagon_id: data.wagonId
		});
		methods.reset();
		closeModal();
	};

	return (
		<SelectSeatFormModal onClose={() => methods.reset()}>
			<Form methods={methods as any} onSubmit={handleSubmit}>
				<div className={classes['container']}>
					<div className={classes['title']}>Выбор места</div>
					<div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '20px' }}>
						<WagonSelect/>
						<WagonNumberSelect/>
						<SeatSchemeSelect/>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div>
								<Button
									onClick={(e) => {
										e.preventDefault();
										closeModal();
										openPreferences();
									}}
									variant={'transparent'}
									size={'lg'}
									radius={'md'}
									style={{ alignSelf: 'flex-end' }}
									type={'submit'}
									onSubmit={(e) => e.preventDefault()}
								>
									Не нашли подходящее место?
								</Button>
							</div>

							<Button
								size={'lg'}
								radius={'md'}
								style={{ alignSelf: 'flex-end' }}
								type={'submit'}
								onSubmit={(e) => e.preventDefault()}
							>
								Выбрать место
							</Button>
						</div>

					</div>
				</div>
			</Form>
		</SelectSeatFormModal>
	);
};
