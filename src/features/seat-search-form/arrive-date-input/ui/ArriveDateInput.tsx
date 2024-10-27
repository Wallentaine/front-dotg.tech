import { JSX } from 'react';
import { RoundDatePicker } from '@shared/components/round-input/ui/RoundDatePicker';
import { useFilterStore } from '@entities/filters/lib/store/FiltersStore';
import { useShallow } from 'zustand/react/shallow';

type ArriveDateInputProps = {}

export const ArriveDateInput = ({}: ArriveDateInputProps): JSX.Element => {

	const [ departureDate, setDepartureDate ] = useFilterStore(useShallow(({
		departureDate,
		setDepartureDate
	}) => [ departureDate, setDepartureDate ]));

	return (
		<RoundDatePicker
			isClearable
			value={departureDate}
			onChange={setDepartureDate}
			onClear={() => setDepartureDate(null)}
			position={'middle'}
			placeholder={'Дата отправления'}
		/>
	);
};
