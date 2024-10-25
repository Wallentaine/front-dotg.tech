import { MainPage } from '@pages/main';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { AboutPage } from '@pages/about';
import { AppLayout } from '@app/ui/layout/AppLayout';
import { NotFoundPage } from '@pages/not-found';

export enum RoutesKeys {
	ROOT = '/',
	MAIN = '/',
	ABOUT = 'about',
}

export const routes: RouteObject[] = [
	{
		path: RoutesKeys.ROOT,
		element: <AppLayout/>,
		children: [
			{
				path: RoutesKeys.MAIN,
				element: <MainPage/>
			},
			{
				path: RoutesKeys.ABOUT,
				element: <AboutPage/>
			},
			{
				path: '*',
				element:  <NotFoundPage/>
			}
		],
	},

];

export const router = createBrowserRouter(routes);
