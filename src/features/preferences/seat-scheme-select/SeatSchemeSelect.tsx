import { JSX } from 'react';
import { useController, useFormContext, useWatch } from 'react-hook-form';
import { Button, Text } from '@mantine/core';
import { useGetSeats } from '@entities/trains/swr/useGetSeats';
import classes from './seatSchemeSelect.module.scss';
import { Seat } from '@entities/trains/types/Train.types';

var groupBy = function (xs, key) {
	return xs.reduce(function (rv, x) {
		(rv[x[key]] = rv[x[key]] || []).push(x);
		return rv;
	}, {});
};

export const SeatSchemeSelect = (): JSX.Element => {

	const { control, getFieldState } = useFormContext();

	const watchedSeatId = useWatch({
		name: 'seatId'
	});

	const watchedWagonId = useWatch({
		name: 'wagonId'
	});

	const seats = useGetSeats(watchedWagonId);

	const { field } = useController({
		name: 'seatId',
		control,
		rules: {
			required: true
		}
	});

	const groupedSeats = groupBy(seats, 'block');


	const renderingSeats = seats.sort((a, b) => Number(a.seatNum) - Number(b.seatNum));
	return watchedWagonId &&
        <div>
            <div style={{ marginBottom: '5px' }}><Text size={'sm'} fw={600}>Выберите место</Text></div>
            <div className={classes['blockList']}>
	            <div style={{alignSelf: 'end'}}>
                    <Text size={'sm'} fw={400} color={'gray'} style={{marginBottom: 20}} >Верхние</Text>
                    <Text size={'sm'} fw={400}  color={'gray'} style={{marginBottom: 25}}>Нижние</Text>
	            </div>
				{Object.entries(groupedSeats).map(([ blockNum, seats ]) =>
					<div className={classes['block']}>
						<Text style={{marginBottom: '10px'}} size={'sm'} fw={600}>Блок {blockNum}</Text>
						<div style={{ marginBottom: '10px' }} className={classes['seatList']}>
							{(seats as Seat[]).map((seat) =>
								Number(seat.seatNum) % 2 === 0 &&
                                <Button
                                    variant={watchedSeatId === seat.seat_id ? 'filled' : 'outline'}
                                    onClick={() => {
										field.onChange(seat.seat_id);
									}}
                                    key={seat.seatNum}
                                    disabled={seat.bookingStatus === 'BOOKED'}
                                >
									{seat.seatNum}
                                </Button>
							)}
						</div>
						<div className={classes['seatList']}>
							{(seats as Seat[]).map((seat) =>
								Number(seat.seatNum) % 2 === 1 &&
                                <Button
                                    variant={watchedSeatId === seat.seat_id ? 'filled' : 'outline'}
                                    key={seat.seatNum}
                                    disabled={seat.bookingStatus === 'BOOKED'}
                                    onClick={() => {
										field.onChange(seat.seat_id);
									}}
                                >
									{seat.seatNum}
                                </Button>
							)}
						</div>
					</div>
				)}
            </div>

            <div>
				{getFieldState('seatId')?.error?.type === 'required' &&
                    <Text size={'sm'} style={{ marginTop: '5px' }} color={'red'}>
                        Выбор места обязателен при
                        бронированни
                    </Text>
				}
            </div>

        </div>;

};
