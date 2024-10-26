import { JSX } from 'react';
import { useInput } from '@shared/react-hook-form/hooks/useInput';
import { SearchSeatFormFieldNames } from '@entities/search-seat/consts/SearchSeatFormFieldNames';
import { RoundInput } from '@shared/components/round-input/ui/RoundInput';
import { useFormContext } from 'react-hook-form';
import { SearchSeatFormData } from '@entities/search-seat';

export const FromInput = (): JSX.Element => {

	const { FROM } = SearchSeatFormFieldNames;

	const { register } = useInput(FROM);

	const { setValue } = useFormContext<SearchSeatFormData>();

	return (
		<RoundInput
			onClear={() => {setValue(FROM, '');}}
			register={register}
			position={'left'}
			placeholder={'Откуда'}
		/>
	);
};
