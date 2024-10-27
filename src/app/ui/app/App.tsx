import { JSX } from 'react';
import { AppRouterProvider } from '@app/lib/providers/AppRouterProvider';
import { AppMantineProvider } from '@app/lib/providers/AppMantineProvider';
import { DatesProvider } from '@mantine/dates';
import 'dayjs/locale/ru';

export const App = (): JSX.Element => {
	return (
		<DatesProvider settings={{
			locale: 'ru'
		}}>
			<AppMantineProvider>
				<AppRouterProvider/>
			</AppMantineProvider>
		</DatesProvider>
	);
};
