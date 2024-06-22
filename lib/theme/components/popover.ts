import { popoverAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';
import { cssVar } from '@chakra-ui/theme-tools';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const $popperBg = cssVar('popper-bg');
const $arrowBg = cssVar('popper-arrow-bg');
const $arrowShadowColor = cssVar('popper-arrow-shadow-color');

const aittorContent = defineStyle(() => {
  return {
    [$arrowBg.variable]: 'colors.base.800',
    [$popperBg.variable]: 'colors.base.800',
    [$arrowShadowColor.variable]: 'colors.base.600',
    minW: 'unset',
    width: 'unset',
    p: 4,
    bg: 'base.800',
    border: 'none',
    shadow: 'dark-lg',
  };
});

const informationalContent = defineStyle(() => {
  return {
    [$arrowBg.variable]: 'colors.base.700',
    [$popperBg.variable]: 'colors.base.700',
    [$arrowShadowColor.variable]: 'colors.base.400',
    p: 4,
    bg: 'base.700',
    border: 'none',
    shadow: 'dark-lg',
  };
});

const aittor = definePartsStyle(() => ({
  content: aittorContent(),
  body: { padding: 0 },
}));

const informational = definePartsStyle(() => ({
  content: informationalContent(),
  body: { padding: 0 },
}));

export const popoverTheme = defineMultiStyleConfig({
  variants: {
    aittor,
    informational,
  },
  defaultProps: {
    variant: 'aittor',
  },
});
