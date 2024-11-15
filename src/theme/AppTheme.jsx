import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { purpletheme } from './purpleTheme';

export const AppTheme = ({ children }) => {

  return (
    <ThemeProvider theme={purpletheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>

  )
}