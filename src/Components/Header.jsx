import Logo from "./Logo";
import NavDropDown from "./NavDropDown";
import ProfileIcon from "../assets/_Navigation actions.png";
import { useEffect, useState } from "react";

function Header() {
    const [showNav, setShowNav] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const toggleDropdown = () => {
        setOpenDropdown(prev => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1000) {
                setShowNav(true);
                setOpenDropdown(false); // Close mobile menu on desktop view
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="py-4 px-5 flex justify-between items-center sm:px-16 md:px-32 shadow-md">
            <div className="flex justify-between space-x-12">
                <div className="uppercase font-bold text-lg">
                    <Logo />
                </div>
                {showNav && (
                    <nav className="md:flex space-x-10 items-center justify-evenly">
                        <a href="#home" className="text-gray-700 hover:text-purple-600">
                            Home
                        </a>
                        <NavDropDown title="Products" />
                        <NavDropDown title="Resources" />
                        <a href="#pricing" className="text-gray-700 hover:text-purple-600">
                            Pricing
                        </a>
                    </nav>
                )}
            </div>
            {showNav && (
                <div>
                    <img src={ProfileIcon} alt="profile-icon" />
                </div>
            )}

            {/* Mobile Menu Toggle Button */}
            <div className="bg-stone-50 p-2 rounded-md md:hidden">
                <button onClick={toggleDropdown}>
                    {openDropdown ? (
                        <svg
                            className="w-6 h-6 text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-900"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {!showNav && openDropdown && (
                <div className="absolute top-0 left-0 w-full bg-white z-10">
                    <div className="flex justify-between p-4">
                        <Logo />
                        <button onClick={toggleDropdown}>
                            <svg
                                className="w-6 h-6 text-gray-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <nav className="space-y-4 pl-5">
                        <a href="#home" className="block py-2 text-base text-gray-700 hover:text-purple-600">
                            Home
                        </a>

                        <NavDropDown title="Resources" />

                        <NavDropDown title="Products" />

                        <a href="#pricing" className="block py-2 text-base text-gray-700 hover:text-purple-600">
                            Pricing
                        </a>
                    </nav>

                    <div className="p-4 mt-4 space-y-4 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <a href="#">About us</a>
                            <a href="#">Support</a>
                            <a href="#">Press</a>
                            <a href="#">Contact</a>
                            <a href="#">Careers</a>
                            <a href="#">Sitemap</a>
                            <a href="#">Legal</a>
                            <a href="#">Cookie settings</a>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <button className="px-4 py-2 font-semibold text-white bg-purple-600 rounded-md">
                                Sign up
                            </button>
                            <button className="px-4 py-2 text-gray-800 border border-gray-300 rounded-md">
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;