export default function Hero() {


    return (
        <main className="flex justify-between mt-20">
            <div className="flex flex-col gap-10">
                <p className="font-semibold text-main-purple">Furkan Kızılbuğa</p>
                <h1 className="text-title font-bold text-7xl">Creative thinker<br />Minimalism lover</h1>
                <p className="text-main-light-grey">
                    Hi, I’m Almila. I’m a full-stack developer. 
                    If you are looking for a Developer who to craft solid
                    and scalable frontend products with great user experiences.
                    Let’s shake hands with me.
                </p>
                <div className="flex gap-3">
                    <button className="text-main-purple bg-transparent border-main-purple hover:bg-main-purple hover:text-white">Hire me</button>
                    <button className="text-main-purple bg-transparent border-main-purple hover:bg-main-purple hover:text-white"><i />Github</button>
                    <button className="text-main-purple bg-transparent border-main-purple hover:bg-main-purple hover:text-white"><i />Linkedin</button>
                </div>
            </div>
            <img />
        </main>
    )
}