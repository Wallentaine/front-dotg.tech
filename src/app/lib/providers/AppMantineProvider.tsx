import { JSX, PropsWithChildren } from 'react';
import { createTheme, MantineProvider, virtualColor } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

const theme = createTheme({
	primaryColor: 'orange',
});

export const AppMantineProvider = ({ children }: PropsWithChildren): JSX.Element => {
	return (
		<MantineProvider theme={theme}>
			<Notifications />
			{children}
		</MantineProvider>
	);
};
