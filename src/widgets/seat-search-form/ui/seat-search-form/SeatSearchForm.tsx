import { JSX } from 'react';
import { Layout } from '../layout/Layout';
import Form from '@shared/react-hook-form/components/form/Form';
import { useForm } from 'react-hook-form';
import { FromInput } from '@features/seat-search-form/from-input';

type SeatSearchProps = {}

export const SeatSearchForm = ({}: SeatSearchProps): JSX.Element => {

	const methods = useForm({});

	const { formState: { errors } } = methods;

	const handleSubmit = () => {
		console.log('submit');
	};

	return (
		<Form methods={methods} onSubmit={handleSubmit}>
			<Layout
				fromInput={<FromInput/>}
			/>
		</Form>
	);
};
