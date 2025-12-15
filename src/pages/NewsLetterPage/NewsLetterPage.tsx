import { useSelector } from "react-redux"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import { newsLetterData } from "../../Data/NewsLetterData/NewsLetterData"
import type { RootState } from "../../state/store"
import BlogCard from "../../components/BlogCard/BlogCard"

const NewsLetterPage = () => {

    const blogs = useSelector((state: RootState) => state.blog.data)
    const posts = blogs.slice(0, 3)
    const mapBlogProps = (blog: typeof blogs[0]) => ({
        id: blog.id,
        title: blog.title,
        author: blog.author,
        date: blog.date,
        description: blog.excerpt,
        cover: blog.coverImage,
        categories: blog.categories.map(cat => 
            typeof cat === 'string' 
                ? { text: cat, bgColor: 'bg-Blue-magenta', textColor: 'text-Moderate-violet' }
                : cat
        )
    })

  return (
    <div className="lg:px-[5.55555vw]">
        <div className="lg:py-[30px] lg:px-20">
            <NewsLetter newsLetter={newsLetterData} />
        </div>
        <div className="py-[30px] md:py-0 lg:py-[30px] px-8 mt-5 mb-5 md:my-[72px] lg:my-0">
            <h2 className="mb-8 text-2xl leading-8 font-semibold">All blog posts</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-4 md:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                {posts.map((post, index) => (
                    <div key={post.id} className={index === 2 ? "md:col-span-full lg:col-span-1" : ""}>
                        <BlogCard layout="vertical" maxChars={90} blogProps={mapBlogProps(post)}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewsLetterPage
