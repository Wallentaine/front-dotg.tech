import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../consts/routes';


export const AppRouterProvider = (): JSX.Element => {
	return <RouterProvider router={router}/>;
};
