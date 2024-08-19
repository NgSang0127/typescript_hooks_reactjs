import { createContext, ReactNode, useState } from "react";

type Theme = "primary" | "secondary";

type ThemeContextProps = {
    children: ReactNode;
};

interface ThemeContextType {
    theme: Theme;
    toggleTheme: (theme: Theme) => void;
}

const themeContextDefault: ThemeContextType = {
    theme: "secondary",
    toggleTheme: () => {} // Default function does nothing
};

export const ThemeContext = createContext<ThemeContextType>(themeContextDefault);

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
    const [theme, setTheme] = useState<Theme>(themeContextDefault.theme);

    const toggleTheme = (newTheme: Theme) => {
        setTheme(newTheme);
    };

    const themeContextDynamicData: ThemeContextType = { theme, toggleTheme };

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <ThemeContext.Provider value={themeContextDynamicData}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
