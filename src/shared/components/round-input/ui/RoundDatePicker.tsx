import { JSX } from 'react';
import { RoundDateInputProps } from '@shared/components/round-input/lib/types/InputProps';
import { DatePickerInput } from '@mantine/dates';
import { getRoundInputProps } from '@shared/components/round-input/lib/helpers/getRoundInputProps';
import classes from './roundInput.module.scss';


export const RoundDatePicker = ({
	position,
	placeholder,
	onClear,
	externalRef,
	...field
}: RoundDateInputProps): JSX.Element => {
	return (
		<DatePickerInput
			ref={externalRef}
			{...field}
			valueFormat={'DD.MM.YYYY'}
			{...getRoundInputProps({
				position,
				placeholder,
				onClear,
				externalClasses: classes['datePickerInput']
			})}
			styles={{
				wrapper: { width: '200px', display: 'flex', alignItems: 'center' },
				input: { paddingTop: '0', paddingBottom: '0' }
			}}
		/>
	);
};
