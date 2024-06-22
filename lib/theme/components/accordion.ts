import { accordionAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const appContainer = defineStyle({
  border: 'none',
  bg: 'base.850',
  borderRadius: 'base',
  ':has(&div &button:hover)': { bg: 'base.800' },
  transitionProperty: 'common',
  transitionDuration: '0.1s',
});

const appButton = defineStyle((_props) => {
  return {
    gap: 2,
    fontWeight: 'semibold',
    fontSize: 'sm',
    border: 'none',
    borderRadius: 'base',
    color: 'base.300',
    _hover: {},
    _expanded: {
      borderBottomRadius: 'none',
    },
  };
});

const appPanel = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.800`,
    borderRadius: 'base',
    p: 0,
    transitionProperty: 'common',
    transitionDuration: '0.1s',
  };
});

const appIcon = defineStyle({
  ms: 2,
});

const aittor = definePartsStyle((props) => ({
  container: appContainer,
  button: appButton(props),
  panel: appPanel(props),
  icon: appIcon,
}));

const baseStyle = definePartsStyle(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
}));

export const accordionTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { aittor },
  defaultProps: {
    variant: 'aittor',
    colorScheme: 'base',
  },
});
