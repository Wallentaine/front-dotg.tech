import { JSX } from 'react';
import classes from './foundButton.module.scss';
import { Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { RoutesKeys } from '@app/lib/consts/routes';

export const FoundButton = (): JSX.Element => {


	const navigate = useNavigate()


	return (
		<button
			type="submit"
			onSubmit={(e) => e.preventDefault()}
			className={classes['button']}
		>
			<Text fw={600}>Найти</Text>
		</button>
	);
};
