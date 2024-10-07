function Badge({ wide, children }) {
    return (
        <p className={`bg-badgeBg border border-badgeBorder text-primary rounded-full px-${wide ? "3" : "2"} py-2 text-sm mt-8`}>{children}</p>
    )
}

export default Badge
