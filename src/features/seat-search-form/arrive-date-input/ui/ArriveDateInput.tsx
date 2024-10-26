import { JSX } from 'react';
import { SearchSeatFormFieldNames } from '@entities/search-seat/consts/SearchSeatFormFieldNames';
import { RoundDatePicker } from '@shared/components/round-input/ui/RoundDatePicker';
import { useController, useFormContext } from 'react-hook-form';
import { SearchSeatFormData } from '@entities/search-seat';

type ArriveDateInputProps = {}

export const ArriveDateInput = ({}: ArriveDateInputProps): JSX.Element => {

	const { ARRIVE_DATE } = SearchSeatFormFieldNames;

	const { control, setValue } = useFormContext<SearchSeatFormData>();

	const { field: { ref, ...field } } = useController({
		name: ARRIVE_DATE,
		control,
	});
	return (
		<RoundDatePicker
			externalRef={ref}
			{...field}
			onClear={() => {setValue(ARRIVE_DATE, null);}}
			position={'middle'}
			placeholder={'Дата отправления'}
		/>
	);
};
