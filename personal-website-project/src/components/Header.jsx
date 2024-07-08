/* eslint-disable react/no-unescaped-entities */
export default function Header() {
    return (
        <header className="mt-4">
            <div className="flex items-center justify-end gap-4">
                <div>
                    <input type="checkbox" />
                    <label className="text-[#777777] font-bold text-sm">DARK MODE</label>
                </div>
                <span className="text-sm font-bold text-main-light-grey">|</span>
                <div>
                    <p className="text-sm text-[#777777] font-bold"><button className="font-bold p-0 bg-transparent text-[#4731D3]">TÜRKÇE</button>'ye GEÇ</p>
                </div>
            </div>
            <div className="flex justify-between items-center mt-5">
                <p className="rounded-full p-3 bg-[#EEEBFF] text-[#7B61FF] font-bold inline-flex items-center justify-center w-12 h-12">F</p>
                <div className="flex gap-3" >
                    <button className="text-main-light-grey bg-transparent">Skills</button>
                    <button className="text-main-light-grey bg-transparent">Projects</button>
                    <button className="bg-transparent text-main-purple border-main-purple">Hire me</button>
                </div>
            </div>
        </header>
    )
}