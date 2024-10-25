import { JSX, PropsWithChildren } from 'react';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({});

export const AppMantineProvider = ({ children }: PropsWithChildren): JSX.Element => {
	return (
		<MantineProvider theme={theme}>
			{children}
		</MantineProvider>
	);
};
