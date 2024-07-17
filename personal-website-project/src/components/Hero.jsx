import { useContext } from "react";
import { TextContext } from "../contexts/TextContext";

export default function Hero() {

    const { handleScroll, bottomRef, data } = useContext(TextContext)

    


    const { description, header1, header2, hire } = data[0].hero;

    return (
        <main className="flex lg:justify-between flex-row mt-20 gap-2 max-[1200px]:flex-col-reverse">
            <div className="flex flex-col gap-10 max-w-2xl">
                <p className="font-semibold text-main-purple dark:text-[#B7AAFF]"><hr className="w-16 border-b-1 dark:border-[#B7AAFF] border-main-purple inline-block mr-2 mb-1" />Furkan Kızılbuğa</p>
                <h1 className="text-title font-bold text-7xl max-[1200px]:text-6xl dark:text-[#AEBCCF]">{header1}<br />{header2}</h1>
                <p className="text-main-light-grey dark:text-white">
                    {description}
                </p>
                <div className="flex gap-3">
                    <button onClick={() => handleScroll(bottomRef)} className="text-main-purple bg-transparent transition border-main-purple hover:bg-main-purple hover:text-white dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-black">{hire}</button>
                    <a href="https://github.com/furkankizilbuga" target="_blank" className="transition cursor-pointer flex items-center border rounded-lg font-medium px-5 text-main-purple bg-transparent border-main-purple hover:bg-main-purple hover:text-white dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-black"><i className="dark:text-[#BAB2E7]" />Github</a>
                    <a href="https://www.linkedin.com/in/furkan-k%C4%B1z%C4%B1lbu%C4%9Fa-8b0bb8278/" target="_blank" className="transition cursor-pointer flex items-center border rounded-lg font-medium px-5 text-main-purple bg-transparent border-main-purple hover:bg-main-purple hover:text-white dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-black"><i className="dark:text-[#BAB2E7]" />Linkedin</a>
                </div>
            </div>
            <img className="rounded-md max-[1200px]:w-56" src="/Assets/vesikalik.jpeg " />
        </main>
    )
}