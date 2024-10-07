import CompanyLogo from "../assets/Testimonial_logo.png"
import ProfileIcon from "../assets/_Navigation actions.png";

function TestimonialSection() {
    return (
        <div className="bg-testBg px-5 py-24 flex flex-col items-center justify-center sm:px-32 sm:py-24">
            <img src={CompanyLogo} alt="company-logo" />
            <h2 className="py-8 px-5 text-3xl sm:text-5xl text-center leading-snug sm:py-8 sm:px-10">We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h2>
            <div className="flex flex-col justify-center items-center gap-1">
                <img src={ProfileIcon} className="h-14" alt="profile-icon" />
                <h2 className="font-semibold pt-4 text-lg">Candice Wu</h2>
                <p className="text-para font-light">Product Manager, Sisyphus</p>
            </div>
        </div>
    )
}

export default TestimonialSection
