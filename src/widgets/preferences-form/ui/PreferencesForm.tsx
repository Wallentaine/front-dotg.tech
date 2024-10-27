import { JSX } from 'react';
import Form from '@shared/react-hook-form/components/form/Form';
import { useForm } from 'react-hook-form';
import { Button } from '@mantine/core';
import classes from './preferencesForm.module.scss';
import { PreferencesDateRange } from '@features/preferences/date-range/PreferencesDateRange';
import { PreferencesPriceRange } from '@features/preferences/price-range/PreferencesPriceRange';
import { PreferencesFormModal } from '@entities/preferences/ui/preferences-form-modal/PreferencesFormModal';
import { WagonSelect } from '@features/preferences/wagon-select/WagonSelect';
import { ReserveCount } from '@features/preferences/reserve-count/ReserveCount';
import { usePreferencesModalStore } from '@entities/preferences/lib/store/PreferencesModalStore';
import { PreferSeat } from '@features/preferences/prefer-seat/PreferSeat';
import { useCreatePreference } from '@entities/preferences/lib/swr/useCreatePreference';
import { useFilterStore } from '@entities/filters/lib/store/FiltersStore';
import { useShallow } from 'zustand/react/shallow';
import { dayjsInstance } from '@shared/config/dayjsConfig';

const SeatPreferDict = {
	'Верхнее': 'upper',
	'Нижнее': 'lower'
};

export const PreferencesForm = (): JSX.Element => {

	const methods = useForm();

	const createPreference = useCreatePreference();
	const [ destination, departure ] = useFilterStore(useShallow(({
		destination,
		departure
	}) => [ destination, departure ]));
	const closeModal = usePreferencesModalStore(({ close }) => close);
	const handleSubmit = (data: any) => {
		const format = 'YYYYMMDD';
		const formattedDateFrom = dayjsInstance().format(format);
		const formattedDateTo = dayjsInstance(data.dateTo).format(format);
		createPreference({
			...data,
			departure_dates: [ formattedDateFrom, formattedDateTo ],
			from: destination,
			to: departure,
			seatCount: data.reserveCount,
			preferSeat: SeatPreferDict[data.preferSeat]

		});
		closeModal();
		methods.reset();
	};

	return (

		<PreferencesFormModal onClose={() => methods.reset()}>
			<div className={classes['container']}>
				<div className={classes['title']}>
					Не нашли подходящий билет? <br/>
					Укажите предпочтения и мы забронируем билеты, когда они появятся в продаже
				</div>

				<div className={classes['formContainer']}>
					<Form onSubmit={handleSubmit} methods={methods}>
						<div className={classes['inputsAndSubmit']}>
							<div className={classes['inputs']}>
								<PreferencesDateRange/>
								<PreferencesPriceRange/>
								<WagonSelect/>
								<ReserveCount/>
								<PreferSeat/>
							</div>
							<Button
								size={'lg'}
								radius={'md'}
								style={{ alignSelf: 'flex-end' }}
								type={'submit'}
								onSubmit={(e) => e.preventDefault()}
							>
								Встать в очередь
							</Button>
						</div>
					</Form>
				</div>
			</div>
		</PreferencesFormModal>
	);
};
