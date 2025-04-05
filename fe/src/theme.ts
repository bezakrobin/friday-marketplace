import {
    createTheme,
    ThemeOptions,
    PaletteOptions,
    PaletteMode,
    Theme
} from '@mui/material/styles';

// --- Color palettes ---

// Light Palette Colors
const primaryLight = '#1A73E8';
const secondaryLight = '#FFAB00';
const backgroundPaperLight = '#FFFFFF';
const backgroundDefaultLight = '#F4F6F8';
const textPrimaryLight = '#202124';
const textSecondaryLight = '#5F6368';
const dividerLight = '#DADCE0';
const errorLight = '#d93025';

// Dark Palette Colors
const primaryDark = '#8AB4F8';
const secondaryDark = '#FFAB00';
const backgroundPaperDark = '#202124';
const backgroundDefaultDark = '#121212';
const textPrimaryDark = '#E8EAED';
const textSecondaryDark = '#9AA0A6';
const dividerDark = 'rgba(255, 255, 255, 0.12)';
const errorDark = '#f28b82';


/**
 * Generates the complete MUI Theme object including palette,
 * typography, component overrides etc., based on the specified mode.
 * Call this function with the current mode ('light' or 'dark')
 * and pass the result to MUI's ThemeProvider.
 *
 * @param mode - The desired palette mode ('light' or 'dark')
 * @returns The complete MUI Theme object.
 */
export const getAppTheme = (mode: PaletteMode): Theme => {

    // 1. Define the palette based on mode
    const palette: PaletteOptions = mode === 'light' ? {
        // === Light Mode Palette ===
        mode: 'light',
        primary: { main: primaryLight },
        secondary: { main: secondaryLight },
        error: { main: errorLight },
        background: { default: backgroundDefaultLight, paper: backgroundPaperLight },
        text: { primary: textPrimaryLight, secondary: textSecondaryLight },
        divider: dividerLight,
    } : {
        // === Dark Mode Palette ===
        mode: 'dark',
        primary: { main: primaryDark },
        secondary: { main: secondaryDark },
        error: { main: errorDark },
        background: { default: backgroundDefaultDark, paper: backgroundPaperDark },
        text: { primary: textPrimaryDark, secondary: textSecondaryDark },
        divider: dividerDark,
    };

    // 2. Define other shared theme options (can be extensive)
    const otherOptions: Omit<ThemeOptions, 'palette'> = {
        typography: {
            fontFamily: '"Roboto", "Noto Sans", Arial, sans-serif',
            button: { fontWeight: 400, fontSize: '0.875rem' },
        },
        shape: { borderRadius: 8 },
        components: {

            MuiButton: {
                defaultProps: {},
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                    },
                    containedPrimary: ({ theme }) => ({
                        borderRadius: '24px',
                        padding: theme.spacing(1, 3),
                        boxShadow: 'none',
                        fontWeight: 400,
                        '&:hover': {
                            boxShadow: 'none',
                        },
                        '&:focus': {
                            outline: 'none',
                        },
                        '&:active': {
                            boxShadow: 'none',
                            outline: 'none',
                            border: 'none',
                        },
                    }),
                },
            },

            MuiAppBar: {
                defaultProps: {
                    elevation: 0,
                    color: 'transparent',
                },
            },

            // ... other component overrides (MuiTextField, MuiAppBar...)
        }
    };

    // 3. Create and return the final theme object
    return createTheme({
        palette: palette,
        ...otherOptions,
    });
};