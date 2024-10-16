import { useContext, useEffect, useState } from "react";
import { TextContext } from "../contexts/TextContext";
import { useTextMutation } from "../services/mutations";

/* eslint-disable react/no-unescaped-entities */
export default function Header() {
    const { data, isDark, setIsDark, setLocalStorage, langLocal, handleScroll, skillsRef, footerRef, projectsRef } = useContext(TextContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if(isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        
    }, [isDark]);

    const handleThemeSwitch = (e) => {
        setIsDark(e.target.checked)
    };

    const mutation = useTextMutation();

    const langHandler = () => {
        if(langLocal === "tr") {
            setLocalStorage("en")
        }
        else {
            setLocalStorage("tr")
        }

        mutation.mutate(langLocal)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { dark, hire, lang, light, projects, skills } = data[0].header;

    return (
        <header className="pt-4">
            <div className="flex items-center justify-end gap-4">
                <div className="flex items-center text-xs sm:text-sm text-[#777777] font-bold">
                    <label className="darkMode">
                        <input 
                            type="checkbox" 
                            checked={isDark} 
                            onChange={handleThemeSwitch} 
                        />
                        <span className="slider"></span>
                    </label>
                    {isDark ? <span className="dark:text-[#D9D9D9]">{light}</span> : <span className="dark:text-[#D9D9D9]">{dark}</span> }
                </div>
                <span className="text-sm font-bold text-main-light-grey">|</span>
                <div>
                    <p className="text-xs sm:text-sm text-[#777777] font-bold">
                        <button onClick={langHandler} className="border-0 font-bold p-0 bg-transparent text-[#4731D3] dark:text-[#BAB2E7]">{lang}</button>
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-center mt-5">
                <p className="rounded-full p-3 bg-[#EEEBFF] text-[#7B61FF] font-bold inline-flex items-center justify-center w-12 h-12 dark:bg-[#4731D3] dark:text-[#8F88FF]">F</p>
                <div className="hidden sm:flex gap-3">
                    <button onClick={() => handleScroll(skillsRef)} className="text-main-light-grey px-7 bg-transparent hover:bg-main-purple hover:text-white dark:hover:border-white dark:hover:bg-transparent dark:text-[#6B7280] max-[700px]:text-sm max-[700px]:px-4">{skills}</button>
                    <button onClick={() => handleScroll(projectsRef)} className="text-main-light-grey px-7 bg-transparent hover:bg-main-purple hover:text-white dark:hover:border-white dark:hover:bg-transparent dark:text-[#6B7280] max-[700px]:text-sm max-[700px]:px-4">{projects}</button>
                    <button onClick={() => handleScroll(footerRef)} className="bg-transparent px-7 text-main-purple border-main-purple hover:transition hover:bg-main-purple hover:text-white dark:bg-white dark:hover:bg-main-purple max-[700px]:text-sm max-[700px]:px-4">{hire}</button>
                </div>
                <button onClick={toggleMenu} className="sm:hidden text-main-light-grey p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <div className="sm:hidden mt-4 flex flex-col gap-2">
                    <button onClick={() => { handleScroll(skillsRef); toggleMenu(); }} className="text-main-light-grey px-7 py-2 bg-transparent hover:bg-main-purple hover:text-white dark:hover:border-white dark:hover:bg-transparent dark:text-[#6B7280]">{skills}</button>
                    <button onClick={() => { handleScroll(projectsRef); toggleMenu(); }} className="text-main-light-grey px-7 py-2 bg-transparent hover:bg-main-purple hover:text-white dark:hover:border-white dark:hover:bg-transparent dark:text-[#6B7280]">{projects}</button>
                    <button onClick={() => { handleScroll(footerRef); toggleMenu(); }} className="bg-transparent px-7 py-2 text-main-purple border-main-purple hover:transition hover:bg-main-purple hover:text-white dark:bg-white dark:hover:bg-main-purple">{hire}</button>
                </div>
            )}
        </header>
    );
}