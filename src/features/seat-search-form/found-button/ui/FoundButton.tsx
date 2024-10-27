import { JSX } from 'react';
import classes from './foundButton.module.scss';
import { Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { RoutesKeys } from '@app/lib/consts/routes';
import { useFilterStore } from '@entities/filters/lib/store/FiltersStore';
import { useShallow } from 'zustand/react/shallow';
import { notifications } from '@mantine/notifications';

export const FoundButton = (): JSX.Element => {

	const [ saveFilters, ...fields ] = useFilterStore(useShallow(({
		saveFilters,
		departure,
		departureDate,
		destination,
	}) => [

		saveFilters,
		departure,
		departureDate,
		destination,
	]));

	const navigate = useNavigate();

	return (
		<button
			type="submit"
			onClick={() => {
				const isFiltersValid = fields.every(Boolean);
				if (!isFiltersValid) {
					notifications.show({
						message: 'Одно или несколько полей не заполнены',
						title: 'Ошибка',
						color: 'red',
						position: 'bottom-right',
					});
					return;
				}
				saveFilters();
				navigate(RoutesKeys.TRAIN_LIST);
			}}
			className={classes['button']}
		>
			<Text fw={600}>Найти</Text>
		</button>
	);
};
