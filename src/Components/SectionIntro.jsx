function SectionIntro({ heading, para }) {
    return (
        <>
            <h2 className="text-3xl font-medium text-center sm:text-4xl">{heading}</h2>
            <p className="text-para text-lg font-light text-center mx-5 my-5 sm:my-5 sm:mx-60">{para}</p>
        </>
    )
}

export default SectionIntro
