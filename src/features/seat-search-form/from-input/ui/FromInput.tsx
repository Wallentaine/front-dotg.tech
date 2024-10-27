import { JSX } from 'react';
import { RoundInput } from '@shared/components/round-input/ui/RoundInput';
import { useFilterStore } from '@entities/filters/lib/store/FiltersStore';
import { useShallow } from 'zustand/react/shallow';

export const FromInput = (): JSX.Element => {

	const [ departure, setDeparture ] = useFilterStore(useShallow(({
		departure,
		setDeparture
	}) => [ departure, setDeparture ]));

	return (
		<RoundInput
			value={departure}
			onChange={(e) => setDeparture(e.target.value)}
			onClear={() => {setDeparture('');}}
			position={'left'}
			placeholder={'Откуда'}
			isClearable
			externalStyles={{ wrapper: { width: '45%' } }}
		/>
	);
};
