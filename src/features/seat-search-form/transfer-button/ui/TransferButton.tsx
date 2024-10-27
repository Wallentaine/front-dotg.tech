import { JSX } from 'react';
import classes from './transferButton.module.scss';
import TransferSvg from '@shared/svg/transfer.svg?react';
import { useFilterStore } from '@entities/filters/lib/store/FiltersStore';

export const TransferButton = (): JSX.Element => {

	const swap = useFilterStore(({ swap }) => swap);

	return (
		<button
			onClick={() => swap()}
			className={classes['button']}
		>
			<TransferSvg/>
		</button>
	);
};
