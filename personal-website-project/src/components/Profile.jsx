import { useContext } from "react"
import { TextContext } from "../contexts/TextContext"

export default function Profile() {

    const { data, isPending, error } = useContext(TextContext);
    
    if(isPending) return <div className="text-center">Loading...</div>
    if(error) return <div className="text-center">{error.message}</div>


    const { header, about, profile } = data[0].profile;

    return (
        <section className="profile border-t-2 border-[#BAB2E7]">
            <h2 className="text-title text-5xl font-semibold pt-11 dark:text-[#AEBCCF]">{header}</h2>
            <div className="flex flex-col lg:flex-row gap-32 pt-5">
                <div className="profile-box min-w-64">
                    <h3 className="text-main-purple pb-4 font-medium text-3xl dark:text-[#B7AAFF]">{profile.title}</h3>
                    <div className="grid grid-cols-2 lg:gap-8">
                        <div className="grid">
                            <p className="font-semibold dark:text-white">{profile.birth}</p>
                            <p className="font-semibold dark:text-white">{profile.residence}</p>
                            <p className="font-semibold dark:text-white">{profile.education}</p>
                            <p className="font-semibold dark:text-white">{profile.preferred}</p>
                        </div>
                        <div  className="grid">
                            <p className="dark:text-white">{profile.myBirth}</p>
                            <p className="dark:text-white">{profile.myResidence}</p>
                            <p className="dark:text-white">{profile.myEducation}</p>
                            <p className="dark:text-white">{profile.myPreferred}</p>
                        </div>
                    </div>
                </div>
                <div className="about-box">
                    <h3 className="text-main-purple pb-4 font-medium text-3xl dark:text-[#B7AAFF]">{about.title}</h3>
                    <div>
                        <p className="text-main-light-grey text-lg dark:text-white">
                            {about.description}
                        </p>
                        <p className="text-main-light-grey text-lg dark:text-white">
                            {about.description}
                        </p>
                    </div>
                </div>
            </div>  
        </section>
    )
}