import { useContext } from "react";
import { Context } from "../contexts/useContext";

export default function Skills() {

    const { skills, skillsRef } = useContext(Context);

    return (
        <section ref={skillsRef} className="mt-32 mb-11 pt-5">
            <h2 className="text-title text-5xl font-semibold dark:text-[#AEBCCF]">{skills.header}</h2>
            <div className="flex gap-32 pt-5">
                <div>
                    <h3 className="text-3xl text-main-purple pb-4 font-medium dark:text-[#B7AAFF]">{skills.javaScript.title}</h3>
                    <p className="text-main-light-grey dark:text-white">
                        {skills.javaScript.description}
                    </p>
                </div>
                <div>
                    <h3>{skills.react.title}</h3>
                    <p>
                        {skills.react.description}
                    </p>
                </div>
                <div>
                    <h3>{skills.node.title}</h3>
                    <p>
                        {skills.node.description}
                    </p>
                </div>
            </div>
        </section>
    )
}