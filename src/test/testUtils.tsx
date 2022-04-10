import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/theme';

export const renderComponent = (component: React.ReactNode) => {
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
