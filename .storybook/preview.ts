import type { Preview } from '@storybook/react'

import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { defaultTheme } from '../src/themes';

import GlobalStyles from '../src/components/GlobalStyles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [withThemeFromJSXProvider({
    themes: {
      theme: defaultTheme,
    },
    defaultTheme: 'theme',
    Provider: ThemeProvider,
    GlobalStyles,
  })],
};

export default preview;
