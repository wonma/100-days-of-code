import React from "react";
import { useTheme } from "./ThemeContext";
function Switcher() {
    const { theme, toggleTheme } = useTheme()
   
    return (
        <input 
            type="checkbox" 
            checked={theme === 'light'} 
            onChange={toggleTheme}
        />
    )
}

export default Switcher;