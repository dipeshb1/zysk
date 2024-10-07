import React from 'react';
import ActionButtons from './ActionButtons';
import CirclePlay from "../assets/play-circle.png";
import headerContainer from "../assets/HeaderContainer.png"
import Badge from './Badge';

function NewFeatureBanner() {
    return (
        <div className="pt-10 px-4 flex flex-col items-center mt-5 md:px-32">
            <Badge><span className="bg-white border border-badgeBorder rounded-full px-1.5 py-1 mr-0 sm:mr-2">New feature</span> Check out the team dashboard <span className='cursor-pointer'>→</span></Badge>
            <h1 className='my-7 text-4xl text-center font-semibold mx-5 text-h1 md:text-6xl'>Beautiful analytics to grow smarter</h1>
            <p className='text-para text-lg font-light text-center px-3'>Powerful, self-serve product and growth analytics to help you convert, engage,<br /> and retain more users. Trusted by over 4,000 startups.</p>
            <div className='flex gap-4 my-10 flex-col-reverse w-full sm:flex-row sm:items-center sm:justify-center'>
                <ActionButtons type="secondary"><img src={CirclePlay} alt="icon" /> Demo</ActionButtons>
                <ActionButtons type="primary">Sign up</ActionButtons>
            </div>
            <div className='mb-10 pt-14 shadow-xl'>
                <img src={headerContainer} alt="header-img" />
            </div>
        </div>
    );
}

export default NewFeatureBanner;