import ActionButtons from "./ActionButtons"
import SectionIntro from "./SectionIntro"

function CtaSection() {
    return (
        <div className="bg-ctaBg flex items-center justify-center flex-col py-16">
            <SectionIntro heading="Start your free trial" para="Join over 4,000+ startups already growing with Untitled." />
            <div className='flex gap-4 my-10'>
                <ActionButtons type="cta-sec">Learn more</ActionButtons>
                <ActionButtons type="faq">Get started</ActionButtons>
            </div>
        </div>
    )
}

export default CtaSection
