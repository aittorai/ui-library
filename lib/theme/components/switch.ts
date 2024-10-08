import { switchAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const appTrack = defineStyle((_props) => {
  return {
    bg: 'base.600',
    p: 1,
    _focusVisible: {
      boxShadow: 'none',
    },
    _checked: {
      bg: 'blue.500',
    },
  };
});

const appThumb = defineStyle((_props) => {
  return {
    bg: 'base.50',
  };
});

const aittor = definePartsStyle((props) => ({
  container: {},
  track: appTrack(props),
  thumb: appThumb(props),
}));

export const switchTheme = defineMultiStyleConfig({
  variants: { aittor },
  defaultProps: {
    size: 'md',
    variant: 'aittor',
  },
});
