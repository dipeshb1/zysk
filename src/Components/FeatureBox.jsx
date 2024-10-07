function FeatureBox({ icon, heading, para, cta }) {
    return (
        <div className="flex flex-col justify-center items-center my-3">
            <div className="border rounded-xl p-2">
                <img src={icon} alt="feature-icon" />
            </div>
            <h3 className="font-semibold text-xl py-4">{heading}</h3>
            <p className="text-center text-para font-light">{para}</p>
            {cta && <a href="#features" className="text-primary my-5">Learn more →</a>}
        </div>
    )
}

export default FeatureBox
