import type { ComponentWithAs, IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react';
import { forwardRef, IconButton as ChakraIconButton } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { typedMemo } from '../../util';
import { Tooltip } from '../tooltip';

export type IconButtonProps = ChakraIconButtonProps & {
  isChecked?: boolean;
  tooltip?: ReactNode;
};

export const IconButton: ComponentWithAs<ComponentWithAs<'button', ChakraIconButtonProps>, IconButtonProps> = typedMemo(
  forwardRef<IconButtonProps, typeof ChakraIconButton>(({ isChecked, tooltip, ...rest }: IconButtonProps, ref) => {
    if (tooltip) {
      return (
        <Tooltip label={tooltip}>
          <ChakraIconButton ref={ref} colorScheme={isChecked ? 'appBlue' : 'base'} {...rest} />
        </Tooltip>
      );
    }

    return <ChakraIconButton ref={ref} colorScheme={isChecked ? 'appBlue' : 'base'} {...rest} />;
  })
);

IconButton.displayName = 'IconButton';
