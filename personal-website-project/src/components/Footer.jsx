import { useContext } from "react"
import { Context } from "../contexts/useContext"

/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
    const { footer, bottomRef } = useContext(Context);
    return (
        <section ref={bottomRef} className="footer bg-[#F9F9F9] m-0 pt-20 pb-24 dark:bg-[#141414]">
            <div className="mx-32">
                <h2 className="text-title text-5xl font-semibold dark:text-[#AEBCCF]" >{footer.description1}<br />{footer.description2}</h2>
                <div className="flex items-center justify-between py-10">
                    <button className="flex gap-1 items-center border-none p-0 underline font-medium text-[#AF0C48]">
                        <img src="../assets/👉.svg"/>
                        <span className="dark:text-[#BAB2E7] dark:underline">furkankizilbuga12@gmail.com</span>
                    </button>
                    <div className="flex gap-5">
                        <a href="https://github.com/furkankizilbuga" target="_blank" className="text-[#00AB6B] hover:text-[#00AB6B] border-none p-0 font-medium">Github</a>
                        <a href="https://www.linkedin.com/in/furkan-k%C4%B1z%C4%B1lbu%C4%9Fa-8b0bb8278/" target="_blank" className="text-[#0077B5] border-none p-0 font-medium">Linkedin</a>
                    </div>
                </div>
            </div>
        </section>
    )
}