import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const appBlue = defineStyle(() => ({
  color: 'appBlue.300',
}));

export const headingTheme = defineStyleConfig({
  variants: {
    appBlue,
  },
});
