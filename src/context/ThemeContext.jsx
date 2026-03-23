import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [mode,setMode] = useState("dark")

    const toggleTheme = () => {
        setMode(mode === "light" ? "dark" : "light")
    }

   const theme = {
  bg: mode === "light" ? "bg-gray-50" : "bg-black",
  text: mode === "light" ? "text-gray-900" : "text-white",

  card: mode === "light"
    ? "bg-white shadow-lg"
    : "bg-slate-900",

  card_border: mode === "light"
    ? "border-gray-200"
    : "border-gray-700",

  border: mode === "light"
    ? "border-gray-200"
    : "border-gray-700",

  qualification_card: mode === "light"
    ? "bg-white shadow-md"
    : "bg-slate-900",

  qualification_border: mode === "light"
    ? "border-gray-200"
    : "border-slate-700",

  // 🔥 ADD THIS
  section_bg: mode === "light"
    ? "bg-gray-100"
    : "bg-black"
};
return(
<ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
{children}
</ThemeContext.Provider>
)
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext)