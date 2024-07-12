import { useContext } from "react";
import { TextContext } from "../contexts/TextContext";

export default function Projects() {

    const { bottomRef, projects } = useContext(TextContext);

    return (
        <section ref={bottomRef}  className="mt-11 mb-36 projects border-t-2 border-[#BAB2E7]">
            <h2 className="text-title text-5xl font-semibold pt-11 dark:text-[#AEBCCF]">Projects</h2>
            <div className="flex justify-between pt-5">
                {projects.map((project, index) => {
                    return (
                            <div key={index}>
                                <h3 className="text-main-purple font-medium text-3xl dark:text-[#B7AAFF]">{project.title}</h3>
                                <p className="text-main-light-grey text-sm dark:text-white">
                                    {project.description}
                                </p>
                                <div className="flex gap-1">
                                    {project.uses.map((use, index) => {
                                        return (
                                            <span key={index} className="text-main-purple border border-main-purple px-2 rounded text-sm font-medium dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">{use}</span>
                                        )
                                    })}
                                </div>
                                <div className="flex justify-between">
                                    <a href={project.github} target="_blank" className="border-b border-main-purple text-main-purple dark:text-[#E1E1FF] dark:border-b-[#E1E1FF]">Github</a>
                                    <a href={project.site} target="_blank" className="text-main-purple border-b border-main-purple dark:text-[#E1E1FF] dark:border-b-[#E1E1FF]">View Site</a>
                                </div>
                            </div>
                    )
                })}
            </div>
        </section>
    )
}