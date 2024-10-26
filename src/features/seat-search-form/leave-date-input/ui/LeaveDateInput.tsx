import { JSX } from 'react';
import { RoundDatePicker } from '@shared/components/round-input/ui/RoundDatePicker';
import { SearchSeatFormFieldNames } from '@entities/search-seat/consts/SearchSeatFormFieldNames';
import { useController, useFormContext } from 'react-hook-form';
import { SearchSeatFormData } from '@entities/search-seat';

type LeaveDateInputProps = {}

export const LeaveDateInput = ({}: LeaveDateInputProps): JSX.Element => {


	const { LEAVE_DATE } = SearchSeatFormFieldNames;

	const { control, setValue } = useFormContext<SearchSeatFormData>();

	const { field: { ref, ...field } } = useController({
		name: LEAVE_DATE,
		control,
	});

	return (
		<RoundDatePicker
			externalRef={ref}
			{...field}
			onClear={() => {setValue(LEAVE_DATE, null);}}
			position={'right'}
			placeholder={'Обратно'}
		/>
	);
};
