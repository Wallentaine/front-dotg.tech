import React, { ReactNode } from 'react';
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { KeyboardKeys } from '@shared/consts/KeyboardKeys';

type FormProps<T extends FieldValues> = {
	children: ReactNode
	onSubmit: SubmitHandler<T>
	methods: UseFormReturn<T>
}

const Form = <T extends FieldValues, >({ children, onSubmit, methods }: FormProps<T>): JSX.Element => {
	return (
		<FormProvider {...methods}>
			<form
				style={{ width: 'inherit' }}
				noValidate
				onSubmit={methods.handleSubmit(onSubmit)}
				onKeyDown={(e) => {
					switch (e.code) {
						case KeyboardKeys.Enter:
							e.preventDefault();
							return;
					}
				}}
			>
				{children}
			</form>
		</FormProvider>
	);
};

export default Form;
