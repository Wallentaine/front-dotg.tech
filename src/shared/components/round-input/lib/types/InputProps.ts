import { UseControllerReturn, UseFormRegisterReturn } from 'react-hook-form';
import { Ref } from 'react';

export type RoundInputProps = {
	position: 'left' | 'right' | 'middle'
	onClear: () => void
	placeholder: string
	externalClasses?: string
}

export type RoundTextInputProps = {
	register: UseFormRegisterReturn
} & RoundInputProps

export type RoundDateInputProps = {
	externalRef: Ref<any>
} & RoundInputProps & Omit<UseControllerReturn['field'], 'ref'>