import { JSX } from 'react';
import { useInput } from '@shared/react-hook-form/hooks/useInput';
import { SearchSeatFormFieldNames } from '@entities/search-seat/consts/SearchSeatFormFieldNames';

export const FromInput = (): JSX.Element => {

	const { FROM } = SearchSeatFormFieldNames;

	const { register } = useInput(FROM);

	return (
		<div>
			<input {...register}/>
		</div>
	);
};
