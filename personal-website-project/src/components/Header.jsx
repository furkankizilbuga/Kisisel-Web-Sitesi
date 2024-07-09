import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Header() {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if(darkMode === false) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const handleThemeSwitch = (e) => {
        setDarkMode(e.target.checked);
    };

    return (
        <header className="pt-4">
            <div className="flex items-center justify-end gap-4">
                <div className="flex items-center text-sm text-[#777777] font-bold">
                    <label className="darkMode">
                        <input 
                            type="checkbox" 
                            checked={darkMode} 
                            onChange={handleThemeSwitch} 
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="dark:text-[#D9D9D9]">DARK MODE</span>
                </div>
                <span className="text-sm font-bold text-main-light-grey">|</span>
                <div>
                    <p className="text-sm text-[#777777] font-bold">
                        <button className="border-0 font-bold p-0 bg-transparent text-[#4731D3] dark:text-[#BAB2E7]">TÜRKÇE</button>'ye GEÇ
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-center mt-5">
                <p className="rounded-full p-3 bg-[#EEEBFF] text-[#7B61FF] font-bold inline-flex items-center justify-center w-12 h-12 dark:bg-[#4731D3] dark:text-[#8F88FF]">F</p>
                <div className="flex gap-3">
                    <button className="text-main-light-grey px-7 bg-transparent dark:text-[#6B7280]">Skills</button>
                    <button className="text-main-light-grey px-7 bg-transparent dark:text-[#6B7280]">Projects</button>
                    <button className="bg-transparent px-7 text-main-purple border-main-purple hover:bg-main-purple hover:text-white dark:bg-white">Hire me</button>
                </div>
            </div>
        </header>
    );
}
