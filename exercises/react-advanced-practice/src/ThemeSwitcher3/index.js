import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import Switcher from './Switcher';
import './style.css';

const Header = () => {
    return (
        <header>
            <h1>Theme Switcher</h1>
            <Switcher />
        </header>
    )
}

const Page = () => {
    return (
        <main>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </main>
    )
}

const AppContainer = ({children}) => {
    const { theme } = useTheme()
    return (
        <div className={`container ${theme === 'light' ? '' : 'dark-theme'}`}>
            <div className='wrapper'>
                {children}
            </div>
        </div>
    )
}

function ThemeSwitcher2() {
    return(
        <ThemeProvider>
            <AppContainer>
                <Header />
                <Page />
            </AppContainer>
        </ThemeProvider>
    )
}

export default ThemeSwitcher2;