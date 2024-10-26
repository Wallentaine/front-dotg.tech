import { JSX } from 'react';
import { Input } from '@mantine/core';
import { RoundTextInputProps } from '../lib/types/InputProps';
import { getRoundInputProps } from '@shared/components/round-input/lib/helpers/getRoundInputProps';

export const RoundInput = ({ onClear, position, register, placeholder }: RoundTextInputProps): JSX.Element => {
	return (
		<Input
			autoComplete={'off'}
			{...getRoundInputProps({ onClear, position, placeholder })}
			{...register}
			styles={{ wrapper: { width: '45%' } }}
		/>
	);
};
