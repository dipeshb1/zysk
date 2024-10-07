import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'; // Icons for UI
import { BsJournalText, BsPersonSquare } from 'react-icons/bs'; // Other icons
import { IoMdVideocam } from 'react-icons/io'; // Video icon

const ProductDropdown = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-2">
                <span className="text-base font-medium text-gray-500 hover:text-purple-600">{title}</span>
                <FiChevronDown />
            </button>

            {isOpen && (
                <div className="absolute top-12 left-0 w-[400px] sm:w-[700px] bg-white shadow-lg rounded-lg p-5">
                    <div className="flex justify-between">
                        {/* Left Section */}
                        <div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3 hover:bg-stone-100 rounded-md p-4 trasition duration-150">
                                    <BsJournalText className="text-lg text-purple-500" />
                                    <div>
                                        <h4 className="font-semibold">Blog</h4>
                                        <p className="text-sm text-gray-500">
                                            The latest industry news, updates, and info.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3 hover:bg-stone-100 rounded-md p-4 trasition duration-150">
                                    <BsPersonSquare className="text-xl text-purple-500" />
                                    <div>
                                        <h4 className="font-semibold">Customer stories</h4>
                                        <p className="text-sm text-gray-500">
                                            Learn how our customers are making big changes.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3 hover:bg-stone-100 rounded-md p-4 trasition duration-150">
                                    <IoMdVideocam className="text-xl text-purple-500" />
                                    <div>
                                        <h4 className="font-semibold">Video tutorials</h4>
                                        <p className="text-sm text-gray-500">
                                            Get up and running on new features and techniques.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col items-start ml-5 bg-stone-50 rounded-md p-4">
                            <img
                                src="https://via.placeholder.com/120x70"
                                alt="demo"
                                className="rounded-lg mb-2 w-full"
                            />
                            <p className="font-semibold my-3">We've just released an update!</p>
                            <p className="text-sm text-gray-500">Check out the new dashboard view. Pages now load faster</p>
                            <div className="flex items-center space-x-5 mt-2">
                                <button className="text-sm text-gray-500">Dismiss</button>
                                <button className="text-sm text-purple-600">Changelog</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDropdown;