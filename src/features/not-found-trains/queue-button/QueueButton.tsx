import { JSX } from 'react';
import { Button } from '@mantine/core';

type QueueButtonProps = {}

export const QueueButton = ({}: QueueButtonProps): JSX.Element => {
	return (<Button size={'lg'} radius={'md'}>Встать в очередь</Button>);
};
