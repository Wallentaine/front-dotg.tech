import { JSX } from 'react';
import { Select } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';

export const WagonSelect = (): JSX.Element => {

	const { control } = useFormContext();

	const { field } = useController({
		name: 'wagonType', control
	});

	return (
		<div>
			<Select
				{...field}
				label="Тип вагона"
				placeholder="Выберите вагон"
				data={[ 'Плацкарт', 'Купе' ]}
			/>
		</div>
	);
};
