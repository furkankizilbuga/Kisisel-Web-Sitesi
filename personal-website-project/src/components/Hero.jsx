import { useContext } from "react";
import { Context } from "../contexts/useContext";

export default function Hero() {

    const { hero, handleScroll, bottomRef } = useContext(Context)

    return (
        <main className="flex justify-between mt-20">
            <div className="flex flex-col gap-10">
                <p className="font-semibold text-main-purple dark:text-[#B7AAFF]">Furkan Kızılbuğa</p>
                <h1 className="text-title font-bold text-7xl dark:text-[#AEBCCF]">{hero.header1}<br />{hero.header2}</h1>
                <p className="text-main-light-grey dark:text-white">
                    {hero.description}
                </p>
                <div className="flex gap-3">
                    <button onClick={() => handleScroll(bottomRef)} className="text-main-purple bg-transparent transition border-main-purple hover:bg-main-purple hover:text-white dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-black">{hero.hire}</button>
                    <a href="https://github.com/furkankizilbuga" target="_blank" className="transition cursor-pointer flex items-center border rounded-lg font-medium px-5 text-main-purple bg-transparent border-main-purple hover:bg-main-purple hover:text-white dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-black"><i className="dark:text-[#BAB2E7]" />Github</a>
                    <a href="https://www.linkedin.com/in/furkan-k%C4%B1z%C4%B1lbu%C4%9Fa-8b0bb8278/" target="_blank" className="transition cursor-pointer flex items-center border rounded-lg font-medium px-5 text-main-purple bg-transparent border-main-purple hover:bg-main-purple hover:text-white dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-black"><i className="dark:text-[#BAB2E7]" />Linkedin</a>
                </div>
            </div>
            <img />
        </main>
    )
}