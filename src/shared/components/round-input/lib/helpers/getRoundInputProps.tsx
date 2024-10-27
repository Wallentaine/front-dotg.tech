import { RoundInputProps } from '@shared/components/round-input/lib/types/InputProps';
import cn from 'classnames';
import classes from '@shared/components/round-input/ui/roundInput.module.scss';
import { CloseButton } from '@mantine/core';
import CircleCrossSvg from '@shared/svg/circle-cross.svg?react';

export const getRoundInputProps = ({ onClear, placeholder, position, isClearable }: RoundInputProps) => {

	return {
		size: 'md' as const,
		variant: 'unstyled',
		placeholder,
		className: cn(
			classes['input'],
			classes[`input_${position}`]
		),
		rightSectionPointerEvents: 'all' as const,
		rightSection: isClearable && <CloseButton
            className={classes['input__cross']}
            icon={<CircleCrossSvg/>}
            onClick={onClear}
        />
	};
};