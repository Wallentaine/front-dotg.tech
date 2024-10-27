import { JSX } from 'react';
import { RoundInput } from '@shared/components/round-input/ui/RoundInput';
import { useFilterStore } from '@entities/filters/lib/store/FiltersStore';
import { useShallow } from 'zustand/react/shallow';


export const ToInput = (): JSX.Element => {

	const [ destination, setDestination ] = useFilterStore(useShallow(({
		destination,
		setDestination
	}) => [ destination, setDestination ]));

	return (
		<RoundInput
			value={destination}
			onChange={(e) => setDestination(e.target.value)}
			placeholder={'Куда'}
			position={'right'}
			onClear={() => setDestination('')}
			isClearable
			externalStyles={{ wrapper: { width: '45%' } }}
		/>
	);
};
