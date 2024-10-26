import { JSX } from 'react';
import { SearchSeatFormFieldNames } from '@entities/search-seat/consts/SearchSeatFormFieldNames';
import { useInput } from '@shared/react-hook-form/hooks/useInput';
import { RoundInput } from '@shared/components/round-input/ui/RoundInput';
import { useFormContext } from 'react-hook-form';
import { SearchSeatFormData } from '@entities/search-seat';

type ToInputProps = {}

export const ToInput = ({}: ToInputProps): JSX.Element => {
	const { TO } = SearchSeatFormFieldNames;

	const { register } = useInput(TO);

	const { setValue } = useFormContext<SearchSeatFormData>();

	return (
		<RoundInput
			placeholder={'Куда'}
			position={'right'}
			onClear={() => {setValue(TO, '');}}
			register={register}
		/>
	);
};
