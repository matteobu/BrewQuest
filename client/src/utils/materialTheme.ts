import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: '#9ca3af', // Thumb color when off
        },
        colorPrimary: {
          '&.Mui-checked': {
            color: '#6b7280', // Thumb color when checked
          },
        },
        track: {
          backgroundColor: '#e5e7eb', // Default track color
          '&.Mui-checked': {
            backgroundColor: '#d1d5db', // Track color when checked
          },
        },
      },
    },
  },
});
