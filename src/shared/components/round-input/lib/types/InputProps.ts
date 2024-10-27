import { ChangeEvent, CSSProperties, Ref } from 'react';
import { DateValue } from '@mantine/dates';

export type RoundInputProps = {
	position: 'left' | 'right' | 'middle'
	onClear: () => void
	placeholder: string
	externalClasses?: string
	externalStyles?: any
	isClearable?: boolean
	externalRef?: Ref<any>
}

export type RoundTextInputProps = {
	type?: string
	value?: string,
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
} & RoundInputProps

export type RoundDateInputProps = {
	value: DateValue
	onChange: (date: DateValue) => void
} & RoundInputProps