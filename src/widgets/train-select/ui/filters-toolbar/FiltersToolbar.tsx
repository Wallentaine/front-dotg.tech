import { JSX, useState } from 'react';
import classes from './filtersToolbar.module.scss';
import { FilterItem } from '@entities/filters/ui/filter-item/FilterItem';

type FiltersToolbarProps = {}

export const FiltersToolbar = ({}: FiltersToolbarProps): JSX.Element => {

	const [ selectedItems, setSelectedItems ] = useState<string[]>([]);

	const handleChange = (selectingOption: string) => {
		setSelectedItems(state => state.includes(selectingOption)
			? state.filter((option) => option !== selectingOption)
			: [ ...state, selectingOption ]);
	};

	return (
		<div className={classes['container']}>
			<FilterItem value={selectedItems} onChange={handleChange} options={[ 'asc', 'desc' ]} title={'Сортировка'}/>
		</div>
	);
};
