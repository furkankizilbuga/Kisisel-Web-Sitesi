export default function Projects() {


    return (
        <section className="projects border-t border-[#BAB2E7]">
            <h2 className="text-title text-5xl font-semibold">Projects</h2>
            <div>
                <div>
                    <h3 className="text-main-purple text-3xl">Workintech</h3>
                    <p className="text-main-light-grey text-sm">
                        A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. 
                        This was created with vanilla JS, SCSS and Parcel Bundler 
                        and is available as a NPM package and the git repository makes any type of customization to code and themes possible.
                    </p>
                    <div className="flex gap-1">
                        <span className="text-main-purple border border-main-purple px-2 rounded text-sm font-medium">react</span>
                        <span className="text-main-purple border border-main-purple px-2 rounded text-sm font-medium">redux</span>
                        <span className="text-main-purple border border-main-purple px-2 rounded text-sm font-medium">axios</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="border-b border-main-purple text-main-purple">Github</span>
                        <span className="text-main-purple border-b border-main-purple">View Site</span>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}