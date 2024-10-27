import { Button, CheckIcon, Combobox, Group, useCombobox } from '@mantine/core';

type FilterItemProps = {
	options: string[]
	onChange: (selectedOption: string) => void
	value: string[]
	title: string
}

export const FilterItem = ({ options, onChange, value, title }: FilterItemProps) => {

	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption(),
	});

	const renderingOptions = options.map((item) => (
		<Combobox.Option value={item} key={item}>
			<Group>
				<span>{item}</span>
				{value.includes(item) && <CheckIcon size={12}/>}
			</Group>
		</Combobox.Option>
	));

	return (
		<Combobox
			store={combobox}
			width={250}
			position="bottom-start"
			positionDependencies={[ value ]}
			onOptionSubmit={onChange}
		>
			<Combobox.Target>
				<Button style={{transition: '0.2s'}} variant={'outline'} onClick={() => combobox.toggleDropdown()}>{title}</Button>
			</Combobox.Target>

			<Combobox.Dropdown style={{border: '1px solid orange'}}>
				<Combobox.Options>{renderingOptions}</Combobox.Options>
			</Combobox.Dropdown>
		</Combobox>
	);
};