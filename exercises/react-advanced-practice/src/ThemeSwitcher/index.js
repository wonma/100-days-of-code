import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switcher from "./Switcher";

const Title = ({ children }) => {  // Depth 2 under Header
    const { theme } = useTheme()
    return (
        <h1 style={{color: theme === 'light' ? '#333333' : '#ededed'}}>{children}</h1>
    )
}

const Header = () => { // Depth 1
    return (
        <header>
            <Title>Welcome to Luna World</Title>
            <Switcher />
        </header>
    )
}

const Page = () => {
    const { theme } = useTheme()
    return (
        <main style={{color: theme === 'light' ? '#333333' : '#ededed'}}>
            <h2>When it comes to a ball</h2>
            <p>Luna is the player. She can play with a little ball for the whole day!</p>
        </main>
    )
}

function WrappedThemeSwitcher () {
    const { theme } = useTheme()
    return (
        <div style={{background: theme === 'light' ? '#ffffff' : '#000000', padding: '20px'}}>
            <Header />
            <Page />
        </div>
    )
}

function ThemeSwitcher() {
    return (
        <ThemeProvider>
            <WrappedThemeSwitcher />
        </ThemeProvider>
    )
}

export default ThemeSwitcher;