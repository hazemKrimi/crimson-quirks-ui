import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    black: {
      main: '#000000',
      light: '',
      dark: '',
    },
    white: {
      main: '#FFFFFF',
      light: '',
      dark: '',
    },
    gray: {
      main: '#C2C9D1',
      light: '',
      dark: `linear-gradient(
        rgba(0, 0, 0, .3),
        rgba(0, 0, 0, .3)
      ),
      linear-gradient(
        #C2C9D1,
        #C2C9D1
      )`,
    },
    success: {
      main: '#3CC13B',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #3CC13B,
        #3CC13B
      )`,
      dark: '',
    },
    error: {
      main: '#F03738',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #F03738,
        #F03738
      )`,
      dark: '',
    },
    warning: {
      main: '#F3BB1C',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #F3BB1C,
        #F3BB1C
      )`,
      dark: '',
    },
    primary: {
      main: '#BD1839',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #BD1839,
        #BD1839
      )`,
      dark: `linear-gradient(
        rgba(0, 0, 0, .3),
        rgba(0, 0, 0, .3)
      ),
      linear-gradient(
        #BD1839,
        #BD1839
      )`,
    },
    secondary: {
      main: '#131314',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #131314,
        #131314
      )`,
      dark: `linear-gradient(
        rgba(0, 0, 0, .3),
        rgba(0, 0, 0, .3)
      ),
      linear-gradient(
        #131314,
        #131314
      )`,
    },
    tertiary: {
      main: '#E7E7E7',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #E7E7E7,
        #E7E7E7
      )`,
      dark: `linear-gradient(
        rgba(0, 0, 0, .3),
        rgba(0, 0, 0, .3)
      ),
      linear-gradient(
        #E7E7E7,
        #E7E7E7
      )`,
    },
  },
};
