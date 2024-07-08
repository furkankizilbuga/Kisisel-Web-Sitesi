/* eslint-disable react/no-unescaped-entities */
export default function Header() {
    return (
        <header>
            <div className="flex items-center justify-end">
                <div>
                    <input type="checkbox" />
                    <label className="text-[#777777] font-bold">DARK MODE</label>
                </div>
                <div>
                    <p className="text-[#777777] font-bold"><button className="font-bold p-0 bg-transparent text-[#4731D3]">TÜRKÇE</button>'ye GEÇ</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p className="rounded-full p-3 bg-[#EEEBFF] text-[#7B61FF] inline-flex items-center justify-center w-12 h-12">F</p>
                <div className="flex gap-3" >
                    <button className="text-main-light-grey bg-transparent">Skills</button>
                    <button className="text-main-light-grey bg-transparent">Projects</button>
                    <button className="bg-transparent text-main-purple border-main-purple">Hire me</button>
                </div>
            </div>
        </header>
    )
}