import React, {
    createContext,
    useState,
    useMemo,
    useContext,
    ReactNode,
    useCallback,
} from 'react';
import {
    ThemeProvider as MuiThemeProvider,
    CssBaseline,
    PaletteMode,
    Theme,
} from '@mui/material';
import { getAppTheme } from '../theme';

interface ThemeContextType {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

const THEME_MODE_STORAGE_KEY = 'appThemeMode';

const ThemeContext = createContext<ThemeContextType>({
    mode: 'light',
    toggleColorMode: () => {
        console.warn('toggleColorMode called outside ThemeContextProvider');
    },
});

interface ThemeContextProviderProps {
    children: ReactNode;
}

/**
 * Provider component that manages theme state (light/dark mode),
 * persists the choice to localStorage, generates the MUI theme object,
 * and provides both the MUI theme and the mode toggling function via context.
 */
export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
    children,
}) => {
    const [mode, setMode] = useState<PaletteMode>(() => {
        try {
            const storedMode = window.localStorage.getItem(THEME_MODE_STORAGE_KEY);
            if (storedMode === 'light' || storedMode === 'dark') {
                return storedMode;
            }
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        } catch (error) {
            console.error("Error reading theme mode from localStorage", error);
        }
        return 'light';
    });

    const toggleColorMode = useCallback(() => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            try {
                window.localStorage.setItem(THEME_MODE_STORAGE_KEY, newMode);
            } catch (error) {
                console.error("Error saving theme mode to localStorage", error);
            }
            return newMode;
        });
    }, []);


    const theme: Theme = useMemo(() => getAppTheme(mode), [mode]);

    const contextValue = useMemo(
        () => ({
            mode,
            toggleColorMode,
        }),
        [mode, toggleColorMode]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = (): ThemeContextType => {
    return useContext(ThemeContext);
};