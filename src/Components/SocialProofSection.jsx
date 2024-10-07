import Logo1 from "../assets/company_logo-1.png"
import Logo2 from "../assets/company-logo-2.png"
import Logo3 from "../assets/company-logo-3.png"
import Logo4 from "../assets/company-logo-4.png"
import Logo5 from "../assets/company-logo-5.png"
import Logo6 from "../assets/company-logo-6.png"



function SocialProofSection() {
    return (
        <div className="my-12 mx-5 flex flex-col gap-8 pb-24 sm:pt-10 sm:pb-24 border-b sm:my-12 sm:mx-32">
            <p className="text-para text-center text-lg">Join 4,000+ companies already growing</p>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-8">
                <img src={Logo1} alt="logo-1" />
                <img src={Logo2} alt="logo-2" />
                <img src={Logo3} alt="logo-3" />
                <img src={Logo4} alt="logo-4" />
                <img src={Logo5} alt="logo-5" />
                <img src={Logo6} alt="logo-6" />
            </div>
        </div>
    )
}

export default SocialProofSection
