import { create } from 'zustand';
import { DateValue } from '@mantine/dates';

export type Filters = {
	departure: string
	destination: string
	departureDate: DateValue
}

type FiltersStore = {
	setDeparture: (departure: string) => void
	setDestination: (destination: string) => void
	setDepartureDate: (departureDate: DateValue) => void
	swap: () => void
	savedFilters: Filters | null
	saveFilters: () => void
} & Filters

export const useFilterStore = create<FiltersStore>()((set, get) => ({
	departure: '',
	destination: '',
	departureDate: null,
	savedFilters: null,
	setDeparture: (departure) => set({ departure }),
	setDepartureDate: (departureDate) => set({ departureDate }),
	setDestination: (destination) => set({ destination }),
	swap: () => {
		const { departure, destination } = get();
		set({ destination: departure, departure: destination });
	},
	saveFilters: () => {
		const {
			departure,
			destination,
			departureDate,
		} = get();
		set({
			savedFilters: {
				departure,
				destination,
				departureDate,
			}
		});
	}
}));