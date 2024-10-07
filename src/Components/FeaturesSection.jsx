import FeatureBox from "./FeatureBox"
import Badge from "./Badge"
import SectionIntro from "./SectionIntro"


function FeaturesSection({ imgSrc, heading, badge, features }) {
    return (
        <div className="px-4 py-14 flex flex-col justify-center items-center gap-4 sm:px-32 sm:py-14">
            {badge ? <Badge wide={true}>Features</Badge> : <p className="text-primary text-center font-medium">Features</p>}
            <SectionIntro heading={heading} para="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups." />
            {imgSrc && <img src={imgSrc} alt="feature-img" className="-pb-10" />}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {features.map((item, index) => <FeatureBox key={index} icon={item.src} heading={item.heading} para={item.para} cta={item.cta_link} />)}
            </div>
        </div>
    )
}

export default FeaturesSection
