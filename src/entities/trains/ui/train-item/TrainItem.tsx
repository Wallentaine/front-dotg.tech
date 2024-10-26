import { JSX } from 'react';
import { TrainInfo } from '@entities/trains/lib/types/Train.types';
import classes from './trainItem.module.scss';
import { StationInfo } from '@entities/trains/ui/station-info/StationInfo';
import { Button } from '@mantine/core';

type TrainItemProps = TrainInfo

export const TrainItem = ({
	arrivalInfo,
	availableSeats,
	coupePrice,
	departureInfo,
	platzkartPrice,
	travelTime,
	minimalPrice
}: TrainItemProps): JSX.Element => {
	return (
		<article className={classes['container']}>
			<div className={classes['stationTime']}>
				<StationInfo {...departureInfo}/>
				<StationInfo {...arrivalInfo}/>
			</div>
			<div className={classes['dataColumn']}>
				<span className={classes['dataColumn__label']}>Время в пути</span>
				<span className={classes['dataColumn__value']}>{travelTime}</span>
			</div>
			<div className={classes['dataColumn']}>
				<span className={classes['dataColumn__label']}>Доступно мест</span>
				<span className={classes['dataColumn__value']}>{availableSeats}</span>
			</div>
			<div className={classes['pricing']}>
				{coupePrice &&
                    <span className={classes['pricing__text']}>
						<span className={classes['pricing__label']}>Купе:</span>
						<span className={classes['pricing__price']}>{coupePrice}</span>
					</span>
				}
				{platzkartPrice &&
                    <span className={classes['pricing__text']}>
						<span className={classes['pricing__label']}>Плацкарт:</span>
						<span className={classes['pricing__price']}>{platzkartPrice}</span>
					</span>
				}
			</div>

			<div className={classes['choosing']}>
				<span className={classes['choosing__price']}> От {minimalPrice} руб.</span>
				<Button radius={'md'} size={'lg'} className={classes['button']}>Выбрать место</Button>
			</div>
		</article>
	);
};
