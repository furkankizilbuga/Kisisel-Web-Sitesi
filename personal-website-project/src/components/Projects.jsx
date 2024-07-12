import { useContext } from "react";
import { TextContext } from "../contexts/TextContext";

export default function Projects() {

    const { bottomRef, projects } = useContext(TextContext);

    return (
        <section ref={bottomRef}  className="mt-11 mb-36 projects border-t-2 border-[#BAB2E7]">
            <h2 className="text-title text-5xl font-semibold pt-11 dark:text-[#AEBCCF]">Projects</h2>
            <div className=" pt-5">
                <div>
                    <h3 className="text-main-purple font-medium text-3xl dark:text-[#B7AAFF]">Workintech</h3>
                    <p className="text-main-light-grey text-sm dark:text-white">
                        A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. 
                        This was created with vanilla JS, SCSS and Parcel Bundler 
                        and is available as a NPM package and the git repository makes any type of customization to code and themes possible.
                    </p>
                    <div className="flex gap-1">
                        <span className="text-main-purple border border-main-purple px-2 rounded text-sm font-medium dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">react</span>
                        <span className="text-main-purple border border-main-purple px-2 rounded text-sm font-medium dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">redux</span>
                        <span className="text-main-purple border border-main-purple px-2 rounded text-sm font-medium dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">axios</span>
                    </div>
                    <div className="flex justify-between">
                        <a href="https://github.com/furkankizilbuga/fsweb-s7-challenge-pizza" target="_blank" className="border-b border-main-purple text-main-purple dark:text-[#E1E1FF] dark:border-b-[#E1E1FF]">Github</a>
                        <a href="https://fsweb-s7-challenge-pizza-roan.vercel.app/" target="_blank" className="text-main-purple border-b border-main-purple dark:text-[#E1E1FF] dark:border-b-[#E1E1FF]">View Site</a>
                    </div>
                </div>
            </div>
        </section>
    )
}