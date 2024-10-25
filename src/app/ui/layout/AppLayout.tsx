import { JSX } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { RoutesKeys } from '@app/lib/consts/routes';


export const AppLayout = (): JSX.Element => {

	return (
		<div>
			<header>
				<nav style={{ display: 'flex', gap: 10 }}>
					<Link to={RoutesKeys.MAIN}>Main</Link>
					<Link to={RoutesKeys.ABOUT}>About</Link>
				</nav>
			</header>
			<main>
				<Outlet/>
			</main>
			<footer>
				Footer
			</footer>
		</div>
	);
};
