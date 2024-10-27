import { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import classes from './trainPage.module.scss'
type TrainPageProps = {}

export const TrainPage = ({}: TrainPageProps): JSX.Element => {
    return (
        <div className={classes['layout']}>
	        <Outlet/>
        </div>
    );
};
