import Accordion from "./Accordion"
import ActionButtons from "./ActionButtons"
import SectionIntro from "./SectionIntro"
import ProfileIcon from "../assets/_Navigation actions.png"

const AccordionList = [
    {
        heading: "Is there a free trial available?",
        para: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        heading: "Can I change my plan later?",
        para: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        heading: "What is your cancellation policy?",
        para: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        heading: "Can other info be added to an invoice?",
        para: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        heading: "How does billing work?",
        para: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        heading: "How do I change my account email?",
        para: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
]

function FaqSection() {
    return (
        <div className="flex flex-col items-center justify-center border-t mx-2 py-20 border-b sm:mx-32 sm:py-20">
            <SectionIntro heading="Frequently asked questions" para="Everything you need to know about the product and billing." />
            <div className="py-16 divide-y divide-gray-300 px-2 sm:w-2/3">
                {AccordionList.map((item, index) => <Accordion key={index} heading={item.heading} para={item.para} />)}
            </div>
            <div className="bg-testBg w-full flex flex-col justify-center font-semibold items-center pt-10 mx-auto">
                <div className="relative flex justify-center items-center mt-4 mb-8">
                    <img src={ProfileIcon} alt="profile" className="h-10 absolute -ml-16" />
                    <img src={ProfileIcon} alt="profile" className="w-12 mx-4 z-10 -mt-2" />
                    <img src={ProfileIcon} alt="profile" className="h-10 absolute -mr-16" />
                </div>
                <h3 className="text-xl">Still have questions?</h3>
                <p className="text-para font-light mt-2 text-lg text-center">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <div className="my-8">
                    <ActionButtons type="faq">Get in touch</ActionButtons>
                </div>
            </div>
        </div>
    )
}

export default FaqSection
