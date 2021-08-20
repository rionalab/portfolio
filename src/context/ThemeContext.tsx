import React, {useState, createContext} from 'react'

interface IProps {
    children: JSX.Element
}

const ThemeContext = createContext('')

export default function ThemeContextProvider({ children } : IProps) {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}
