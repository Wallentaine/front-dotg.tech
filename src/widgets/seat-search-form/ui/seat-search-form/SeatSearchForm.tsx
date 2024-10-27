import { JSX } from 'react';
import { Layout } from '../layout/Layout';
import { FromInput } from '@features/seat-search-form/from-input';
import { FoundButton } from '@features/seat-search-form/found-button';
import { TransferButton } from '@features/seat-search-form/transfer-button';
import { ToInput } from '@features/seat-search-form/to-input';
import { ArriveDateInput } from '@features/seat-search-form/arrive-date-input';


export const SeatSearchForm = (): JSX.Element => {

	return (
		<Layout
			fromInput={<FromInput/>}
			transferButton={<TransferButton/>}
			toInput={<ToInput/>}
			arriveDateInput={<ArriveDateInput/>}
			submitButton={<FoundButton/>}
		/>
	);
};
