import { create } from 'zustand';

type PreferencesModalStore = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	open: () => void
	close: () => void
}

export const usePreferencesModalStore = create<PreferencesModalStore>()((set) => ({
	isOpen: false,
	setIsOpen: (isOpen) => set({ isOpen }),
	close: () => set({isOpen: false}),
	open: () => set({ isOpen: true })
}));