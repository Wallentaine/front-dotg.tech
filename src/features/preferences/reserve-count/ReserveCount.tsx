import { JSX } from 'react';
import { useInput } from '@shared/react-hook-form/hooks/useInput';
import { TextInput } from '@mantine/core';


export const ReserveCount = (): JSX.Element => {

	const { register } = useInput('reserveCount');

	return (
		<div>
			<TextInput label={'Количество мест'} placeholder={'Введите число'}  type={'number'} max={10} {...register}/>
		</div>
	);
};
