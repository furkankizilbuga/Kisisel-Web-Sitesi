import { useContext } from "react";
import { TextContext } from "../contexts/TextContext";

export default function Profile() {
    const { data } = useContext(TextContext);
    const { header, about, profile } = data[0].profile;

    return (
        <section className="profile border-t-2 border-[#BAB2E7]">
            <h2 className="text-title text-5xl font-semibold pt-11 dark:text-[#AEBCCF]">{header}</h2>
            <div className="flex flex-col lg:flex-row gap-8 pt-5">
                <div className="profile-box flex-1 min-w-0">
                    <h3 className="text-main-purple pb-4 font-medium text-3xl dark:text-[#B7AAFF]">{profile.title}</h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 max-w-60">
                            <p className="font-semibold dark:text-white w-24">{profile.birth}</p>
                            <p className="dark:text-white">{profile.myBirth}</p>
                        </div>
                        <div className="flex gap-2 max-w-60">
                            <p className="font-semibold dark:text-white w-24">{profile.residence}</p>
                            <p className="dark:text-white">{profile.myResidence}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold dark:text-white w-24">{profile.education}</p>
                            <p className="dark:text-white max-w-48">{profile.myEducation}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold dark:text-white w-24">{profile.preferred}</p>
                            <p className="dark:text-white max-w-48">{profile.myPreferred}</p>
                        </div>
                    </div>
                </div>
                <div className="about-box flex-1 min-w-0">
                    <h3 className="text-main-purple pb-4 font-medium text-3xl dark:text-[#B7AAFF]">{about.title}</h3>
                    <div>
                        <p className="text-main-light-grey text-lg dark:text-white">
                            {about.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
