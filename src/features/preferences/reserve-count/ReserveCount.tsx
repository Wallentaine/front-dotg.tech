import { JSX } from 'react';
import { TextInput } from '@mantine/core';
import { useFormContext } from 'react-hook-form';


export const ReserveCount = (): JSX.Element => {

	const { register } = useFormContext();

	const registerReserveCount = register('reserveCount', {
		required: true,
		max: 10
	});

	return (
		<div>
			<TextInput
				label={'Количество мест'}
				placeholder={'Введите число'}
				type={'number'}
				max={10} {...registerReserveCount}
			/>
		</div>
	);
};
