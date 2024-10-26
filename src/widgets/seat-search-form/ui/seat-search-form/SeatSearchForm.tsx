import { JSX } from 'react';
import { Layout } from '../layout/Layout';
import Form from '@shared/react-hook-form/components/form/Form';
import { useForm } from 'react-hook-form';
import { FromInput } from '@features/seat-search-form/from-input';
import { FoundButton } from '@features/seat-search-form/found-button';
import { TransferButton } from '@features/seat-search-form/transfer-button';
import { ToInput } from '@features/seat-search-form/to-input';
import { SearchSeatFormData } from '@entities/search-seat';
import { ArriveDateInput } from '@features/seat-search-form/arrive-date-input';

type SeatSearchProps = {}

export const SeatSearchForm = ({}: SeatSearchProps): JSX.Element => {

	const methods = useForm<SearchSeatFormData>();

	const handleSubmit = (data: SearchSeatFormData): void => {
		console.log(data);
	};

	return (
		<Form methods={methods} onSubmit={handleSubmit}>
			<Layout
				fromInput={<FromInput/>}
				transferButton={<TransferButton/>}
				toInput={<ToInput/>}
				submitButton={<FoundButton/>}
				arriveDateInput={<ArriveDateInput/>}
			/>
		</Form>

	);
};
