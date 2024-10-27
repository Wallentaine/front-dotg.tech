import { JSX } from 'react';
import { Select } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';


export const PreferSeat = (): JSX.Element => {

	const { control } = useFormContext();

	const { field } = useController({ name: 'preferSeat', control });

	return (
		<div>
			<Select
				{...field}
				label="Предпочитаемое место"
				placeholder="Выберите значение"
				data={[ 'Верхнее', 'Нижнее' ]}
			/>
		</div>
	);
};
