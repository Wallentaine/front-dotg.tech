import { MainPage } from '@pages/main';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { AboutPage } from '@pages/about';
import { AppLayout } from '@app/ui/layout/AppLayout';
import { NotFoundPage } from '@pages/not-found';
import { NotFoundTrains } from '@widgets/train-select/ui/not-found-trains/NotFoundTrains';
import { TrainPage } from '@pages/train-page/ui/TrainPage';

export enum RoutesKeys {
	ROOT = '/',
	MAIN = '/',
	NOT_FOUND_TRAINS = 'notFoundTrains',
	TRAIN_LIST = 'trainList'
}

export const routes: RouteObject[] = [
	{
		path: RoutesKeys.ROOT,
		element: <AppLayout/>,
		children: [
			{
				path: RoutesKeys.MAIN,
				element: <MainPage/>,
				children: [
					{
						path: RoutesKeys.NOT_FOUND_TRAINS,
						element: <NotFoundTrains/>
					},
				],
			},
			{
				path: RoutesKeys.TRAIN_LIST,
				element: <TrainPage/>
			},
			{
				path: '*',
				element: <NotFoundPage/>
			}
		],
	},

];

export const router = createBrowserRouter(routes);
