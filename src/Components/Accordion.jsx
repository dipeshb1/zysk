import { useState } from "react"

function Accordion({ heading, para }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(prev => !prev)
    }

    return (
        <div className="py-5 cursor-pointer" onClick={handleClick}>
            <div className="flex justify-between items-center">
                <h3 className="text-lg">{heading}</h3>
                <div className="border-2 rounded-full w-6 h-6 flex items-center justify-center text-base">
                    {isOpen ? "-" : "+"}
                </div>
            </div>
            {isOpen && <p className="text-para text-base font-light mt-2">{para}</p>}
        </div>
    )
}

export default Accordion
