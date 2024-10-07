import ActionButtons from "./ActionButtons";
import BlogSrc1 from "../assets/blog-1.png";
import BlogSrc2 from "../assets/blog-2.png";
import BlogSrc3 from "../assets/blog-3.png";
import BlogProfile1 from "../assets/blog-icon-1.png";
import BlogProfile2 from "../assets/blog-icon-2.png";
import BlogProfile3 from "../assets/blog-icon-3.png";
import BlogCard from "./BlogCard";

const blogs = [
    {
        id: 1,
        src: BlogSrc1,
        category: "Design",
        heading: "UX review presentations",
        para: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        icon: BlogProfile1,
        name: "Olivia Rhye",
        date: "20 Jan 2024"
    },
    {
        id: 2,
        src: BlogSrc2,
        category: "Product",
        heading: "Migrating to Linear 101",
        para: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
        icon: BlogProfile2,
        name: "Phoenix Baker",
        date: "19 Jan 2024"
    },
    {
        id: 3,
        src: BlogSrc3,
        category: "Software Engineering",
        heading: "Building your API stack",
        para: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
        icon: BlogProfile3,
        name: "Lana Steiner",
        date: "18 Jan 2024"
    }
]

function BlogsSection() {
    return (
        <div className="mx-5 py-16 sm:mx-32">
            <div className="flex justify-between flex-col md:flex-row md:items-start">
                <div>
                    <p className="text-primary text-left font-medium">Our blog</p>
                    <h2 className="text-4xl font-medium text-left my-3">Latest blog posts</h2>
                    <p className="text-para text-lg font-light text-left my-5">
                        Tools and strategies modern teams need to help their companies grow.
                    </p>
                </div>

                {/* Apply order to move the button to the bottom on mobile and top-right on larger screens */}
                <ActionButtons type="blogs" className="order-2 md:order-1 mt-5 md:mt-0 md:ml-auto">
                    View all Posts
                </ActionButtons>
            </div>

            <div className="flex justify-between items-center gap-5 flex-col md:flex-row">
                {blogs.map((item) => (
                    <BlogCard
                        key={item.id}
                        src={item.src}
                        category={item.category}
                        heading={item.heading}
                        para={item.para}
                        icon={item.icon}
                        name={item.name}
                        date={item.date}
                    />
                ))}
            </div>
        </div>
    );
}

export default BlogsSection;
