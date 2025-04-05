import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';

interface CircleLoaderProps {
    /** MUI CircularProgress props */
    progressProps?: CircularProgressProps;
}

/**
 * A simple component that displays a CircularProgress indicator
 * centered vertically and horizontally within a full viewport height container.
 * Ideal for use as a Suspense fallback.
 */
const CircleLoader: React.FC<CircleLoaderProps> = ({ progressProps }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100%'
            }}
        >
            <CircularProgress {...progressProps} />
        </Box>
    );
};

export default CircleLoader;