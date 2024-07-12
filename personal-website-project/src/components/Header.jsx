import { useContext, useEffect } from "react";
import { TextContext } from "../contexts/TextContext";

/* eslint-disable react/no-unescaped-entities */
export default function Header() {

    const { isDark, setIsDark, setLocalStorage, lang, header, handleScroll, skillsRef, bottomRef } = useContext(TextContext);

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

    const langHandler = () => {
        if(lang === "tr") setLocalStorage("en")
        else setLocalStorage("tr")
    }

    return (
        <header className="pt-4">
            <div className="flex items-center justify-end gap-4">
                <div className="flex items-center text-sm text-[#777777] font-bold">
                    <label className="darkMode">
                        <input 
                            type="checkbox" 
                            checked={isDark} 
                            onChange={handleThemeSwitch} 
                        />
                        <span className="slider"></span>
                    </label>
                    {isDark ? <span className="dark:text-[#D9D9D9]">{header.light}</span> : <span className="dark:text-[#D9D9D9]">{header.dark}</span> }
                </div>
                <span className="text-sm font-bold text-main-light-grey">|</span>
                <div>
                    <p className="text-sm text-[#777777] font-bold">
                        <button onClick={langHandler} className="border-0 font-bold p-0 bg-transparent text-[#4731D3] dark:text-[#BAB2E7]">{header.lang}</button>
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-center mt-5">
                <p className="rounded-full p-3 bg-[#EEEBFF] text-[#7B61FF] font-bold inline-flex items-center justify-center w-12 h-12 dark:bg-[#4731D3] dark:text-[#8F88FF]">F</p>
                <div className="flex gap-3">
                    <button onClick={() => handleScroll(skillsRef)} className="text-main-light-grey px-7 bg-transparent dark:hover:border-white dark:text-[#6B7280]">{header.skills}</button>
                    <button onClick={() => handleScroll(bottomRef)} className="text-main-light-grey px-7 bg-transparent dark:hover:border-white dark:text-[#6B7280]">{header.projects}</button>
                    <button onClick={() => handleScroll(bottomRef)} className="bg-transparent px-7 text-main-purple border-main-purple hover:bg-main-purple dark:bg-white">{header.hire}</button>
                </div>
            </div>
        </header>
    );
}
