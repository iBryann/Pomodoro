import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ITheme {
    setBgColor: (background: string) => void;
    bgColor: string;
}

interface IThemeProvider {
    children: ReactNode;
}

const themeContext = createContext<ITheme>({} as ITheme);

const ThemeProvider = ({ children }:IThemeProvider) => {
    const [background, setBackground] = useState('#DB524D');

    useEffect(() => {
        document.body.style.backgroundColor = background;
    }, [background]);

    return (
        <themeContext.Provider value={{ bgColor: background, setBgColor: setBackground }}>
            { children }
        </themeContext.Provider>
    )
}

function useTheme() {
    const context = useContext(themeContext);

    return context;
}

export {useTheme, ThemeProvider};