/* eslint-disable react/prop-types */
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useLang from "../hooks/useLang";

const ContextProvider = ({children}) => {

    const [isDark, setIsDark] = useLocalStorage("dark", false);
    const [lang, setLocalStorage] = useLocalStorage("lang", "tr");

    const [header, hero, skills, profile, footer] = useLang(lang);

    return (
        <Context.Provider value={{isDark, setIsDark, lang, setLocalStorage, header, hero, skills, profile, footer}}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext();
export default ContextProvider;