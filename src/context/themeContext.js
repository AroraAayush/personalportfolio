import { createContext ,useContext } from "react";


const themeContext=createContext({
    themeMode:"dark",
    setLightMode:()=>{},
    setDarkMode:()=>{}
})

export default themeContext;


export const ThemeContextProvider=themeContext.Provider;


export const useTheme=()=>{
return useContext(themeContext);
}