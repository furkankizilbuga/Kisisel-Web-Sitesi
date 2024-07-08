export default function Profile() {


    return (
        <section className="profile border-t-2 border-[#BAB2E7]">
            <h2 className="text-title text-5xl font-semibold pt-11">Profile</h2>
            <div className="flex gap-6 pt-5">
                <div className="profile-box">
                    <h3 className="text-main-purple font-medium text-3xl">Profile</h3>
                    <div className="flex">
                        <div>
                            <p>Doğum tarihi</p>
                            <p>İkamet Şehri</p>
                            <p>Eğitim Durumu</p>
                            <p>Tercih Ettiği Rol</p>
                        </div>
                        <div>
                            <p>05.11.2001</p>
                            <p>İstanbul</p>
                            <p>İstanbul Ünv. İngiliz Dili ve Edebiyatı Lisans, 2019</p>
                            <p>Frontend, UI</p>
                        </div>
                    </div>
                </div>
                <div className="about-box">
                    <h3 className="text-main-purple font-medium text-3xl">About Me</h3>
                    <div>
                        <p className="text-main-light-grey text-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                        </p>
                        <p className="text-main-light-grey text-lg">
                            Mnima accusamus ratione soluta aperiam sit voluptate? 
                            Dicta quod deserunt quam temporibus cumque magnam! 
                        </p>
                    </div>
                </div>
            </div>  
        </section>
    )
}