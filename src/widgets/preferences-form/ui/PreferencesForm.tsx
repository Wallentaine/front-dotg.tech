import { JSX } from 'react';
import Form from '@shared/react-hook-form/components/form/Form';
import { useForm } from 'react-hook-form';
import { Button, Select } from '@mantine/core';
import classes from './preferencesForm.module.scss';
import { PreferencesDateRange } from '@features/preferences/date-range/PreferencesDateRange';
import { PreferencesPriceRange } from '@features/preferences/price-range/PreferencesPriceRange';
import { PreferencesFormModal } from '@entities/preferences/ui/preferences-form-modal/PreferencesFormModal';
import { WagonSelect } from '@features/preferences/wagon-select/WagonSelect';
import { ReserveCount } from '@features/preferences/reserve-count/ReserveCount';
import { usePreferencesModalStore } from '@entities/preferences/lib/store/PreferencesModalStore';
import { PreferSeat } from '@features/preferences/prefer-seat/PreferSeat';
import { useCreatePreference } from '@entities/preferences/lib/swr/useCreatePreference';

export const PreferencesForm = (): JSX.Element => {

	const methods = useForm();

	const createPreference = useCreatePreference();

	const closeModal = usePreferencesModalStore(({ close }) => close);
	const handleSubmit = (data: any) => {
		createPreference(data);
		closeModal();
	};

	return (

		<PreferencesFormModal>
			<div className={classes['container']}>
				<div className={classes['title']}>
					Не нашли подходящий билет? <br/>
					Укажите предпочтения и мы забронируем
					или&nbsp;оповестим о новых билетах в продаже
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
								Забронировать
							</Button>
						</div>
					</Form>
				</div>
			</div>
		</PreferencesFormModal>
	);
};
