import { JSX } from 'react';
import { AppRouterProvider } from '@app/lib/providers/AppRouterProvider';
import { AppMantineProvider } from '@app/lib/providers/AppMantineProvider';

export const App = (): JSX.Element => {
	return (
		<AppMantineProvider>
			<AppRouterProvider/>
		</AppMantineProvider>
	);
};
