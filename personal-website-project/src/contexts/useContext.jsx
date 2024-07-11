/* eslint-disable react/prop-types */
import { createContext, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useLang from "../hooks/useLang";

const ContextProvider = ({children}) => {

    const [isDark, setIsDark] = useLocalStorage("dark", false);
    const [lang, setLocalStorage] = useLocalStorage("lang", "tr");

    const [header, hero, skills, profile, footer] = useLang(lang);

    // smoothScroll //

    const skillsRef = useRef(null);
    const bottomRef = useRef(null);

    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    // smoothScroll //

    return (
        <Context.Provider value={{isDark, setIsDark, lang, setLocalStorage, header, hero, skills, profile, footer, skillsRef, bottomRef, handleScroll }}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext();
export default ContextProvider;