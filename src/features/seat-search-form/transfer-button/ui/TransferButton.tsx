import { JSX } from 'react';
import classes from './transferButton.module.scss';
import TransferSvg from '@shared/svg/transfer.svg?react';
import { useFormContext } from 'react-hook-form';
import { SearchSeatFormFieldNames } from '@entities/search-seat/consts/SearchSeatFormFieldNames';

export const TransferButton = (): JSX.Element => {

	const { FROM, TO } = SearchSeatFormFieldNames;

	const { setValue, getValues } = useFormContext();

	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				const [ from, to ] = getValues([ FROM, TO ]);
				setValue(FROM, to);
				setValue(TO, from)
			}}
			className={classes['button']}
		>
			<TransferSvg/>
		</button>
	);
};
