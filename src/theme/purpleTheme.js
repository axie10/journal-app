import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpletheme = createTheme({
    palette:{
        primary: {
            main: '#6d6bf5'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})