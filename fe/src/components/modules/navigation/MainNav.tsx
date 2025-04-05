import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    AppBarProps
} from '@mui/material';

interface MainNavProps extends Pick<AppBarProps, 'sx' | 'position'> {
    /**
     * The element(s) to display on the left side (e.g., logo, app title).
     * Can be a string, Typography, img, or any React node.
     */
    logo: React.ReactNode;
    /**
     * The element(s) to display on the right side (e.g., navigation links, buttons).
     * Passed as standard React children.
     */
    children?: React.ReactNode;
}

/**
 * A reusable main navigation bar component.
 * Displays a logo element aligned to the left and accepts children
 * (e.g., links, buttons) to be aligned to the right.
 */
const MainNav: React.FC<MainNavProps> = ({
    logo,
    children,
    position = "static",
    sx
}) => {
    return (
        <AppBar position={position} sx={sx} elevation={0}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    {logo}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {children}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default MainNav;