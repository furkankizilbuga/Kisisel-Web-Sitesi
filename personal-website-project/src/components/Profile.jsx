export default function Profile() {


    return (
        <section className="profile border-t-2 border-[#BAB2E7]">
            <h2 className="text-title text-5xl font-semibold pt-11 dark:text-[#AEBCCF]">Profile</h2>
            <div className="flex gap-6 pt-5">
                <div className="profile-box">
                    <h3 className="text-main-purple font-medium text-3xl dark:text-[#B7AAFF]">Profile</h3>
                    <div className="flex">
                        <div>
                            <p className="font-semibold dark:text-white">Doğum tarihi</p>
                            <p className="font-semibold dark:text-white">İkamet Şehri</p>
                            <p className="font-semibold dark:text-white">Eğitim Durumu</p>
                            <p className="font-semibold dark:text-white">Tercih Ettiği Rol</p>
                        </div>
                        <div>
                            <p className="dark:text-white">05.11.2001</p>
                            <p className="dark:text-white">İstanbul</p>
                            <p className="dark:text-white">İstanbul Ünv. İngiliz Dili ve Edebiyatı Lisans, 2019</p>
                            <p className="dark:text-white">Frontend, UI</p>
                        </div>
                    </div>
                </div>
                <div className="about-box">
                    <h3 className="text-main-purple font-medium text-3xl dark:text-[#B7AAFF]">About Me</h3>
                    <div>
                        <p className="text-main-light-grey text-lg dark:text-white">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                        </p>
                        <p className="text-main-light-grey text-lg dark:text-white">
                            Mnima accusamus ratione soluta aperiam sit voluptate? 
                            Dicta quod deserunt quam temporibus cumque magnam! 
                        </p>
                    </div>
                </div>
            </div>  
        </section>
    )
}