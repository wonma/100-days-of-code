import React from 'react';
import { useTheme } from './ThemeContext';

const Switcher = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className='switcher'>
            <label htmlFor='checkbox'>checkbox</label>
            <input id='checkbox' type='checkbox' checked={theme} onChange={() => toggleTheme(!theme)} />
        </div>
    )
}

export default Switcher;