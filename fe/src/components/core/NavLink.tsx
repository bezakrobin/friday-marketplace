import React from 'react';
import {
    NavLink as RouterNavLink,
    NavLinkProps as RouterNavLinkProps,
} from 'react-router-dom';
import { useTheme } from '@mui/material';
import Button, { ButtonProps as CoreButtonProps } from './Button';

export interface NavLinkProps extends Omit<CoreButtonProps, 'component' | 'href' | 'variant' | 'ref'>,
    Pick<RouterNavLinkProps, 'to' | 'end' | 'caseSensitive'>
{

}

/**
 * Core NavLink component styled similarly to Gemini navigation links.
 * Uses the Core Button component as its base and integrates with React Router DOM.
 * Active state styling must be applied by the parent component via the 'sx' prop.
 */
const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({
         to,
         end,
         caseSensitive,
         children,
         startIcon,
         sx,
         ...buttonProps
    }, ref) => {

        const theme = useTheme();

        const defaultSx: CoreButtonProps['sx'] = {
            justifyContent: 'flex-start',
            textTransform: 'none',
            fontWeight: 400,
            fontSize: '0.875rem',
            color: theme.palette.text.primary,
            padding: theme.spacing(1, 2),
            borderRadius: '20px',
            width: '100%',
            transition: theme.transitions.create(['background-color', 'color'], {
                duration: theme.transitions.duration.shortest,
            }),
            backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: theme.palette.action.hover,
            },
            '& .MuiButton-startIcon': {
                marginRight: theme.spacing(1.5),
                color: theme.palette.text.secondary,
            },
            '& .MuiCircularProgress-root': {
                width: '20px !important',
                height: '20px !important',
            },
        };

        return (
            <Button
                ref={ref}
                component={RouterNavLink}
                to={to}
                end={end}
                caseSensitive={caseSensitive}
                variant="text"
                sx={[
                    defaultSx,
                    ...(Array.isArray(sx) ? sx : [sx]),
                ]}
                startIcon={startIcon}
                {...buttonProps}
            >
                {children}
            </Button>
        );
    }
);

NavLink.displayName = 'CoreNavLink';
export default NavLink;