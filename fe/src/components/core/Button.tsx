import React from 'react';
import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
    CircularProgress,
} from '@mui/material';
import NavLink from "./NavLink.tsx";

// Extend MUI ButtonProps
export interface ButtonProps extends MuiButtonProps {
    /**
     * If true, shows a loading spinner instead of the button children.
     * @default false
     */
    loading?: boolean;
}

/**
 * Button component wrapping MUI Button.
 * Inherits default styling (like Gemini look for containedPrimary) from the theme.
 * Provides optional loading state.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
         children,
         loading = false,
         disabled,
         sx,
         ...restMuiProps
    }, ref) => {

        return (
            <MuiButton
                ref={ref}
                disabled={disabled || loading}
                sx={sx}
                {...restMuiProps}
            >
                {loading ? (
                    <CircularProgress size={20} color="inherit" />
                ) : (
                    children
                )}
            </MuiButton>
        );
    }
);

NavLink.displayName = 'CoreButton';
export default Button;