import React from 'react';
import Button from "../components/core/Button";
import NavLink from "../components/core/NavLink";
import MainNav from '../components/modules/navigation/MainNav';
import { Typography, Box, IconButton, Tooltip, useTheme, alpha } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AppsIcon from '@mui/icons-material/Apps';
import { useThemeContext } from '../contexts/ThemeContext';
import { Link as RouterLink } from 'react-router-dom';

const Main: React.FC = () => {
    const { mode, toggleColorMode } = useThemeContext();
    const theme = useTheme();

    const appLogo = (
        <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" component="div">
                Friday
            </Typography>
        </RouterLink>
    );

    const handleSignIn = () => alert('Navigate to Sign In page...');
    const handleAppsClick = () => alert('Apps icon clicked!');

    const publicNavLinks = [
        { path: '/developers', label: 'For developers' },
        { path: '/companies', label: 'For companies' },
        { path: '/faq', label: 'Frequently asked questions' },
    ];

    const linkSx = {
        color: 'primary.main',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        borderRadius: '24px',
        fontWeight: 600,
        fontSize: '0.875rem',
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shortest,
        }),
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            textDecoration: 'none',
        },
        minWidth: 'auto',
        width: 'fit-content',
    };

    return (
        <Box>
            <MainNav
                logo={appLogo}
                position="sticky"
            >
                {/* 1. Public Links */}
                {publicNavLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        variant="text"
                        sx={linkSx}
                    >
                        {link.label}
                    </NavLink>
                ))}

                {/* 2. Apps Icon Button with Tooltip */}
                <Tooltip title="Friday Apps">
                    <IconButton
                        sx={{ color: 'inherit' }}
                        onClick={handleAppsClick}
                        aria-label="Friday Apps"
                    >
                        <AppsIcon />
                    </IconButton>
                </Tooltip>

                {/* 3. Theme Toggle IconButton */}
                <Tooltip title="Toggle Theme Mode">
                    <IconButton
                        sx={{ color: 'inherit' }}
                        onClick={toggleColorMode}
                        aria-label="Toggle Theme Mode"
                    >
                        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Tooltip>

                {/* 4. Sign In Button */}
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={handleSignIn}
                >
                    Sign In
                </Button>
            </MainNav>
        </Box>
    );
};

export default Main;