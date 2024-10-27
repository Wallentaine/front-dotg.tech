import { MainPage } from '@pages/main';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { AppLayout } from '@app/ui/layout/AppLayout';
import { TrainPage } from '@pages/train-page/ui/TrainPage';
import { NotFound } from '@shared/components/not-found';
import { TrainSelect } from '@widgets/train-select/ui/train-select/TrainSelect';
import { PreferencesForm } from '@widgets/preferences-form/ui/PreferencesForm';

export enum RoutesKeys {
	ROOT = '/',
	MAIN = '/',
	NOT_FOUND_TRAINS = 'notFoundTrains',
	TRAIN_LIST = 'trainList',
	NOT_FOUND = 'notFound',
	PREFERENCES_PAGE = 'preferencesPage'
}

export const routes: RouteObject[] = [
	{
		element: <AppLayout/>,
		children: [
			{
				path: RoutesKeys.MAIN,
				element: <MainPage/>,
			},
			{
				element: <TrainPage/>,
				children: [
					{
						path: RoutesKeys.TRAIN_LIST,
						element: <TrainSelect/>
					},
				]
			},
			{
				path: '*',
				element: <NotFound/>,
			}
		],
	},

];

export const router = createBrowserRouter(routes);
