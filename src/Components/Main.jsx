import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import SocialProofSection from "./SocialProofSection";
import TestimonialSection from "./TestimonialSection";
import FeatureImg from "../assets/features-img.png"

import Feature_1 from "../assets/feature-1.png"
import Feature_2 from "../assets/feature-2.png"
import Feature_3 from "../assets/feature-3.png"
import Feature_4 from "../assets/feature-4.png"
import Feature_5 from "../assets/feature-5.png"
import Feature_6 from "../assets/feature-6.png"
import Feature_1b from "../assets/featureb-1.png"
import Feature_2b from "../assets/featureb-2.png"
import Feature_3b from "../assets/featureb-3.png"
import FaqSection from "./FaqSection";
import BlogsSection from "./BlogsSection";
import CtaSection from "./CtaSection";

const featuresListA = [
    {
        src: Feature_1,
        heading: "Share team inboxes",
        para: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        cta_link: false
    },
    {
        src: Feature_2,
        heading: "Deliver instant answers",
        para: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        cta_link: false
    },
    {
        src: Feature_3,
        heading: "Manage your team with reports",
        para: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
        cta_link: false
    },
    {
        src: Feature_4,
        heading: "Connect with customers",
        para: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
        cta_link: false
    },
    {
        src: Feature_5,
        heading: "Connect the tools you already use",
        para: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
        cta_link: false
    },
    {
        src: Feature_6,
        heading: "Our people make the difference",
        para: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
        cta_link: false
    }
];

const featureListB = [
    {
        src: Feature_1b,
        heading: "Share team inboxes",
        para: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        cta_link: true
    },
    {
        src: Feature_2b,
        heading: "Deliver instant answers",
        para: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        cta_link: true
    },
    {
        src: Feature_3b,
        heading: "Manage your team with reports",
        para: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
        cta_link: true
    }
]

function Main() {
    return (
        <div>
            <HeroSection />
            <SocialProofSection />
            <FeaturesSection heading="Analytics that feels like it’s from the future" badge={false} features={featuresListA} />
            <TestimonialSection />
            <FeaturesSection imgSrc={FeatureImg} heading="Cutting-edge features for advanced analytics" badge={true} features={featureListB} />
            <FaqSection />
            <BlogsSection />
            <CtaSection />
        </div>
    )
}

export default Main
