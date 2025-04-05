import React from 'react';
import Routing from './routing/Routing';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
    return (
        <ThemeContextProvider>
            <Routing />
        </ThemeContextProvider>
    );
}

export default App;
