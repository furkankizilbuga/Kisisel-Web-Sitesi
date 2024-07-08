/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
    return (
        <section className="footer bg-[#F9F9F9] m-0 pt-20 pb-24">
            <div className="mx-32">
                <h2 className="text-title text-5xl font-semibold">Let's work together on<br /> your next product.</h2>
                <div className="flex items-center justify-between py-10">
                    <button className="flex gap-1 items-center border-none p-0 underline font-medium text-[#AF0C48]">
                        <img src="../assets/👉.svg"/>
                        <span>furkankizilbuga12@gmail.com</span>
                    </button>
                    <div className="flex gap-5">
                        <a href="https://github.com/furkankizilbuga" target="_blank" className="text-[#00AB6B] hover:text-[#00AB6B] border-none p-0">Github</a>
                        <button className="text-[#0077B5] border-none p-0">Linkedin</button>
                    </div>
                </div>
            </div>
        </section>
    )
}