import { useContext } from "react"
import { TextContext } from "../contexts/TextContext"

/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
    const { data, footerRef } = useContext(TextContext);


    const { description1, description2 } = data[0].footer;

    return (
        <section ref={footerRef} className="footer bg-[#F9F9F9] m-0 pt-20 pb-24 dark:bg-[#141414]">
            <div className="w-3/4 m-auto">
                <h2 className="text-title text-5xl font-semibold dark:text-[#AEBCCF]">{description1}<br />{description2}</h2>
                <div className="flex sm:items-center sm:flex-row sm:justify-between py-10 flex-col gap-2">
                    <a href="mailto:furkankizilbuga12@gmail.com" target="_blank" className="flex gap-1 items-center border-none p-0 underline font-medium text-[#AF0C48]">
                        <span className="dark:text-[#BAB2E7] dark:underline">&#128073;furkankizilbuga12@gmail.com</span>
                    </a>
                    <div className="flex gap-5">
                        <a href="https://github.com/furkankizilbuga" target="_blank" className="text-[#00AB6B] hover:text-[#00AB6B] border-none p-0 font-medium">Github</a>
                        <a href="https://www.linkedin.com/in/furkan-k%C4%B1z%C4%B1lbu%C4%9Fa-8b0bb8278/" target="_blank" className="text-[#0077B5] border-none p-0 font-medium">Linkedin</a>
                    </div>
                </div>
            </div>
        </section>
    )
}