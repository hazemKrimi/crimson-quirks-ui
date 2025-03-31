import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import { defaultTheme } from '../../themes';

export type ThemeProviderProps = {
  children: React.ReactNode;
	theme?: DefaultTheme;
};

function ThemeProvider({ children, theme = defaultTheme }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  );
}

export default ThemeProvider;
