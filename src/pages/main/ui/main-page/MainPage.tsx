import { JSX } from 'react';
import UserSvg from '@shared/svg/user.svg?react';

type MainPageProps = {}

export const MainPage = ({}: MainPageProps): JSX.Element => {

	return (
		<div>
			<UserSvg/>
			Main Page
		</div>
	);
};

export default MainPage;