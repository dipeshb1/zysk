import FooterList from "./FooterList";
import Logo from "./Logo";

const product = ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"];
const company = ["About us", "Careers", "Press", "News", "Media kit", "Contact"];
const resources = ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"];
const useCases = ["Startups", "Enterprise", "Government", "SaaS centre", "Marketplaces", "Ecommerce"];
const social = ["Twitter", "LinkedIn", "Facebook", "Github", "AngelList", "Dribbble"];
const Legal = ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"];

function Footer() {
    return (
        <div className="mx-5 py-16 flex flex-col sm:mx-32">
            <div className="grid grid-cols-2 gap-7 md:grid-cols-6 border-b pb-16">
                <FooterList title={"Product"} list={product} apply={true} badge={2} />
                <FooterList title={"Company"} list={company} />
                <FooterList title={"Resources"} list={resources} />
                <FooterList title={"Use Cases"} list={useCases} />
                <FooterList title={"Social"} list={social} />
                <FooterList title={"Legal"} list={Legal} />
            </div>
            <div className="flex justify-between items-start gap-5 pt-8 flex-col sm:flex-row sm:justify-between">
                <Logo />
                <p className="text-para font-light">© 2077 Untitled UI. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
