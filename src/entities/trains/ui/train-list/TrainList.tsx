import { JSX } from 'react';
import { TrainItem } from '@entities/trains/ui/train-item/TrainItem';
import classes from './trainList.module.scss';
import { useFilterStore } from '@entities/filters/lib/store/FiltersStore';
import { NotFoundTrains } from '@widgets/train-select/ui/not-found-trains/NotFoundTrains';
import { SelectSeatForm } from '@widgets/select-seat-form/ui/SelectSeatForm';
import { useGetTrains } from '@entities/trains/swr/useGetTrains';
import { dayjsInstance } from '@shared/config/dayjsConfig';
import { Button } from '@mantine/core';
import { usePreferencesModalStore } from '@entities/preferences/lib/store/PreferencesModalStore';


const parseTime = (timeInMiliseconds: number): string => {

	let h = Math.floor(timeInMiliseconds / 1000 / 60 / 60);
	let m = Math.floor((timeInMiliseconds / 1000 / 60 / 60 - h) * 60);

	m < 10 ? m = `0${m}` : m = `${m}`;
	h < 10 ? h = `0${h}` : h = `${h}`;

	return `${h}:${m}`;
};

export const TrainList = (): JSX.Element => {

	const savedFilters = useFilterStore(({ savedFilters }) => savedFilters);

	const openPreferences = usePreferencesModalStore(({ open }) => open);

	const { data: trains, isLoading } = useGetTrains({
		to: savedFilters?.destination,
		date: savedFilters?.departureDate,
		from: savedFilters?.departure
	});
	const renderingTrains = trains?.filter((train) => Boolean(train?.available_seats_count));


	if (!isLoading && renderingTrains?.length === 0) {
		return (
			<NotFoundTrains/>
		);
	}

	return (
		<div className={classes['container']}>
			<SelectSeatForm/>
			<div className={classes['list']}>
				{renderingTrains.map(({ train_id, detailed_route, available_seats_count, wagons_info }) => {
						const departureInfo = detailed_route[0];
						const arrivalInfo = detailed_route[detailed_route.length - 1];
						const parseFormat = 'DD.MM.YYYY HH:mm:ss';
						const departureDayJs = dayjsInstance(departureInfo.departure, parseFormat);
						const arrivalDayJs = dayjsInstance(arrivalInfo.arrival, parseFormat);
						const coupeWagon = wagons_info.find(wagon => wagon.type === 'COUPE');
						const platzcartWagon = wagons_info.find(wagon => wagon.type === 'PLATZCART');

						const coupePrice = String(coupeWagon?.seats?.[0]?.price);
						const platzkartPrice = String(platzcartWagon?.seats?.[0]?.price);
						const travelTime = arrivalDayJs.diff(departureDayJs);
						return (
							<TrainItem
								key={train_id}
								id={train_id}
								departureInfo={{
									date: departureDayJs.locale('ru').format('D MMM'),
									station: departureInfo.name,
									time: departureDayJs.format('HH:mm')
								}}
								arrivalInfo={{
									date: arrivalDayJs.locale('ru').format('D MMM'),
									station: arrivalInfo.name,
									time: arrivalDayJs.format('HH:mm')
								}}
								availableSeats={available_seats_count}
								coupePrice={coupePrice}
								platzkartPrice={platzkartPrice}
								minimalPrice={platzkartPrice}
								travelTime={parseTime(travelTime)}
							/>
						);
					}
				)}
			</div>
			<Button
				onClick={(e) => {
					e.preventDefault();
					openPreferences();
				}}
				variant={'transparent'}
				size={'lg'}
				radius={'md'}
				style={{ alignSelf: 'center' }}
				type={'submit'}
				onSubmit={(e) => e.preventDefault()}
			>
				Не нашли подходящее место?
			</Button>
		</div>

	);
};
