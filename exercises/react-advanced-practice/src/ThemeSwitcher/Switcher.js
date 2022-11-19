import React from "react";
import { useTheme } from "./ThemeContext";
import "./Styles.css"

function Switcher() {
    const { theme, toggleTheme } = useTheme()
   
    return (
        <label className="switch">
            <input 
                type="checkbox" 
                checked={theme === 'light'} 
                onChange={toggleTheme}
            />
            <span className="slider round" />
        </label>

    )
}

export default Switcher;