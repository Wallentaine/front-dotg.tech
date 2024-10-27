import { JSX } from 'react';
import { Input } from '@mantine/core';
import { RoundTextInputProps } from '../lib/types/InputProps';
import { getRoundInputProps } from '@shared/components/round-input/lib/helpers/getRoundInputProps';

export const RoundInput = ({
	onClear,
	position,
	placeholder,
	onChange,
	value,
	isClearable,
	externalRef,
	externalStyles,
	...props
}: RoundTextInputProps): JSX.Element => {
	return (
		<Input
			ref={externalRef}
			value={value}
			onChange={onChange}
			autoComplete={'off'}
			{...getRoundInputProps({ onClear, position, placeholder, isClearable })}
			styles={externalStyles}
			{...props}
		/>
	);
};
