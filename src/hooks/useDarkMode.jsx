// src/hooks/useDarkMode.js
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, []);

    useEffect(() => {
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    return [theme, toggleTheme];
};
