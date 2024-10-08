import type { ThemeOverride, ToastProviderProps } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { layerStyles } from './layers';
import { noScrollbarsStyles, overlayscrollbarsStyles } from './overlayscrollbars';
import { reactflowStyles } from './reactflow';
import { shadows } from './shadows';
import { space } from './space';

export const theme: ThemeOverride = {
  config: {
    cssVarPrefix: 'aittor',
  },
  direction: 'ltr',
  colors,
  components,
  layerStyles,
  shadows,
  space,
  sizes: space,
  styles: {
    global: {
      body: { bg: 'base.900', color: 'base.50' },
      '*': { ...noScrollbarsStyles },
      ...overlayscrollbarsStyles,
      ...reactflowStyles,
    },
  },
  fonts: {
    body: "'Inter Variable', sans-serif",
    heading: "'Inter Variable', sans-serif",
  },
  radii: {
    base: '4px',
    lg: '8px',
    md: '4px',
    sm: '2px',
  },
  fontSizes: {
    xs: '0.65rem',
    sm: '0.75rem',
    md: '0.9rem',
    lg: '1.025rem',
    xl: '1.15rem',
    '2xl': '1.3rem',
    '3xl': '1.575rem',
    '4xl': '1.925rem',
    '5xl': '2.5rem',
    '6xl': '3.25rem',
    '7xl': '4rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
};

export const TOAST_OPTIONS: ToastProviderProps = {
  defaultOptions: { isClosable: true, position: 'bottom-right' },
};
