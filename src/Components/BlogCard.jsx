import ArrowIcon from "../assets/arrowIcons.png"

function BlogCard({ src, category, para, heading, name, icon, date }) {
    return (
        <div className="mt-5">
            <img src={src} alt="blog-image" className="my-5" />
            <p className="text-primary">{category}</p>
            <div className="flex justify-between items-center my-3">
                <h3 className="text-2xl font-semibold">{heading}</h3>
                <img src={ArrowIcon} alt="arrow" className="h-3 cursor-pointer" />
            </div>
            <p className="text-para font-light">{para}</p>
            <div className="flex items-center gap-3 py-5">
                <img src={icon} alt="user-img" className="h-10" />
                <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-sm font-light">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
