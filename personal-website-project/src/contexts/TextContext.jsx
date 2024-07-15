/* eslint-disable react/prop-types */
import { createContext, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTexts } from "../services/queries";

const TextContextProvider = ({children}) => {

    const [isDark, setIsDark] = useLocalStorage("dark", false);
    const [langLocal, setLocalStorage] = useLocalStorage("lang", "tr");

    const {isPending, error, data} = useTexts(langLocal);

    // smoothScroll //

    const skillsRef = useRef(null);
    const footerRef = useRef(null);
    const projectsRef = useRef(null);

    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    // smoothScroll //

    return (
        <TextContext.Provider value={{ error, isPending, data, isDark, setIsDark, langLocal, setLocalStorage, skillsRef, footerRef, projectsRef, handleScroll }}>
            {children}
        </TextContext.Provider>
    )
}

export const TextContext = createContext();
export default TextContextProvider;