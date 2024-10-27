import { JSX, useEffect } from 'react';
import { useSelectSeatFormModalStore } from '@entities/seats/lib/store/SelectSeatFormModalStore';
import { useController, useFormContext, useWatch } from 'react-hook-form';
import { Button, Text } from '@mantine/core';
import classes from './wagonNumberSelect.module.scss';
import { useGetWagons } from '@entities/trains/swr/useGetWagons';

type WagonSelectProps = {}

const wagonsDict: Record<string, string> = {
	'Плацкарт': 'PLATZCART',
	'Купе': 'COUPE'
};

export const WagonNumberSelect = ({}: WagonSelectProps): JSX.Element => {

	const { setValue, control, getFieldState } = useFormContext();

	const watchedType = useWatch({ name: 'wagonType' });

	const watchedWagonId = useWatch({ name: 'wagonId' });

	const trainId = useSelectSeatFormModalStore(({ trainId }) => trainId);

	const wagons = useGetWagons(trainId);

	const searchedWagons = wagons.filter((wagon) => wagonsDict[watchedType] === wagon.type);

	const { field } = useController({
		name: 'wagonId',
		control,
		rules: {
			required: true
		}
	});

	useEffect(() => {
		setValue('wagonId', '');
	}, [ watchedType ]);
	return watchedType && <div>
        <div style={{ marginBottom: '10px' }}><Text size={'sm'} fw={'600'}>Номер вагона</Text></div>
        <div className={classes['list']}>
			{searchedWagons.map((wagon, index) =>
				<Button
					key={wagon.wagon_id}
					variant={watchedWagonId === wagon.wagon_id ? 'filled' : 'outline'}
					onClick={(e) => {
						e.preventDefault();
						field.onChange(wagon.wagon_id);
						// setValue('wagonId', wagon.wagon_id);
					}}
				>
					{index + 1}
				</Button>
			)}
        </div>
        <div>
			{getFieldState('wagonId')?.error?.type === 'required' &&
                <Text size={'sm'} style={{ marginTop: '5px' }} color={'red'}>
                    Выбор вагона обязателен при
                    бронированни
                </Text>
			}
        </div>
    </div>;


};
