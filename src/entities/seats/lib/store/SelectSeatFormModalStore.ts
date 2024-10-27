import { create } from 'zustand';

type SelectSeatModalStore = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	open: () => void
	close: () => void
	trainId: number | null
	setTrainId: (id: number) => void
}

export const useSelectSeatFormModalStore = create<SelectSeatModalStore>()((set) => ({
	isOpen: false,
	trainId: null,
	setIsOpen: (isOpen) => set({ isOpen }),
	close: () => set({ isOpen: false, trainId: null }),
	open: () => set({ isOpen: true }),
	setTrainId: (id) => set({ trainId: id })
}));