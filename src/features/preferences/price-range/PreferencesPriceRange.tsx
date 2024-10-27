import { JSX } from 'react';
import { PreferencesInputGroup } from '@entities/preferences/ui/preferences-input-group/PreferencesInputGroup';
import { RoundInput } from '@shared/components/round-input/ui/RoundInput';
import { useFormContext } from 'react-hook-form';
import { TextInput } from '@mantine/core';

type PreferencesPriceRangeProps = {}

export const PreferencesPriceRange = ({}: PreferencesPriceRangeProps): JSX.Element => {

	const { register } = useFormContext();

	const priceFromProps = register('priceFrom');
	const priceToProps = register('priceTo');
	return (
		<div>
			<PreferencesInputGroup
				label={'Промежуток цены'}
				left={
					<TextInput
						label="Минимальная цена"
						placeholder="Введите число"
						type={'number'}
						{...priceFromProps}
					/>
				}
				right={
					<TextInput
						label="Максимальная цена"
						placeholder="Введите число"
						type={'number'}
						{...priceToProps}

					/>
				}
			/>
		</div>
	);
};
