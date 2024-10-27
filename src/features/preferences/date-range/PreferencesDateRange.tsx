import { JSX } from 'react';
import { PreferencesInputGroup } from '@entities/preferences/ui/preferences-input-group/PreferencesInputGroup';
import { useController, useFormContext } from 'react-hook-form';
import { DatePickerInput } from '@mantine/dates';

type PreferencesDateRangeProps = {}

export const PreferencesDateRange = ({}: PreferencesDateRangeProps): JSX.Element => {

	const { control } = useFormContext();

	const { field: dateFromField } = useController({
		control,
		name: 'dateFrom',
	});

	const { field: dateToField } = useController({
		control,
		name: 'dateTo',
	});

	return (
		<PreferencesInputGroup
			left={
				<DatePickerInput
					label="Начало"
					placeholder="Выбрать дату"
					{...dateFromField}
				/>
			}
			right={
				<DatePickerInput
					label="Конец"
					placeholder="Выбрать дату"
					{...dateToField}
				/>
			}
		/>
	);
};
