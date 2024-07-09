export default function Hero() {


    return (
        <main className="flex justify-between mt-20">
            <div className="flex flex-col gap-10">
                <p className="font-semibold text-main-purple dark:text-[#B7AAFF]">Furkan Kızılbuğa</p>
                <h1 className="text-title font-bold text-7xl dark:text-[#AEBCCF]">Creative thinker<br />Minimalism lover</h1>
                <p className="text-main-light-grey dark:text-white">
                    Hi, I’m Almila. I’m a full-stack developer. 
                    If you are looking for a Developer who to craft solid
                    and scalable frontend products with great user experiences.
                    Let’s shake hands with me.
                </p>
                <div className="flex gap-3">
                    <button className="text-main-purple bg-transparent border-main-purple hover:bg-main-purple hover:text-white dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-black">Hire me</button>
                    <button className="text-main-purple bg-transparent border-main-purple hover:bg-main-purple hover:text-white dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-black"><i className="dark:text-[#BAB2E7]" />Github</button>
                    <button className="text-main-purple bg-transparent border-main-purple hover:bg-main-purple hover:text-white dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-black"><i className="dark:text-[#BAB2E7]" />Linkedin</button>
                </div>
            </div>
            <img />
        </main>
    )
}