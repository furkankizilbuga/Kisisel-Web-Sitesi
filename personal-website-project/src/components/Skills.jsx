import { useContext } from "react";
import { TextContext } from "../contexts/TextContext";

export default function Skills() {

    const { data, skillsRef } = useContext(TextContext);


    const { header, skillArr } = data[0].skills;

    return (
        <section ref={skillsRef} className="mt-32 mb-11 pt-5">
            <h2 className="text-title text-5xl font-semibold dark:text-[#AEBCCF]">{header}</h2>
            <div className="lg:flex lg:justify-between gap-32 pt-5">
                {skillArr.map((skill, index) => {
                    return (
                        <div key={index} className="min-w-44 max-w-sm">
                            <h3 className="text-3xl text-main-purple pb-4 font-medium dark:text-[#B7AAFF]">{skill.title}</h3>
                            <p className="text-main-light-grey dark:text-white">
                                {skill.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}