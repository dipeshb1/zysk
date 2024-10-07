function ActionButtons({ type, children }) {
    let base = "rounded-md font-normal flex items-center justify-center gap-3 transition duration-300 hover:shadow-md";
    if (type === "primary") {
        base += " px-6 py-4 border-none text-lg bg-btn text-white hover:bg-primary"
    } else if (type === "secondary") {
        base += " px-6 py-4 bg-white text-lg border border-cta-border hover:bg-stone-100"
    } else if (type === "faq") {
        base += " px-4 py-2 text-base border-none bg-btn text-white hover:bg-primary"
    } else if (type === "blogs") {
        base += " px-3.5 py-2 text-base border-none bg-btn text-white hover:bg-primary"
    } else if (type === "cta-sec") {
        base += " px-4 py-2 bg-white text-lg border border-para hover:bg-stone-100"
    }
    return (
        <button className={base}>{children}</button>
    )
}

export default ActionButtons
