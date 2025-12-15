import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import type { RootState } from "../../state/store";
import type { Category, ContentBlock } from "../../interfaces/Blog/Blog";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import { newsLetterData } from "../../Data/NewsLetterData/NewsLetterData";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blog = () => {
    const { id } = useParams();
    const allBlogs = useSelector((state: RootState) => state.blog.data)
    const blogs = useSelector((state: RootState) => state.blog.data.find(blog => blog.id === Number(id)));
    const posts = allBlogs.filter(blog => blog.id !== Number(id)).slice(-9)

    const mapBlogProps = (blog: typeof allBlogs[0]) => ({
        id: blog.id,
        title: blog.title,
        author: blog.author,
        date: blog.date,
        description: blog.excerpt,
        cover: blog.coverImage,
        categories: blog.categories.map((cat: Category) => 
            typeof cat === 'string' 
                ? { text: cat, bgColor: 'bg-Blue-magenta', textColor: 'text-Moderate-violet' }
                : cat
        )
    })

    if (!blogs) return <h3 className="font-xl">Blog not found</h3>

  return (
    <div className="w-full px-8 lg:px-[7.77777vw]">
        <div className="flex flex-col-reverse md:flex-row gap-4 lg:gap-8 lg:px-8 lg:py-[30px]">
            <div className="w-full max-w-[342px]">
                <h2 className="mb-8 text-2xl leading-8 font-semibold">Recent blog post</h2>
                <div className="flex flex-col gap-8">
                    {posts.map((post, index) => (
                        <div key={post.id} className={index === 2 ? "md:col-span-full lg:col-span-1" : ""}>
                            <BlogCard layout="vertical" maxChars={90} blogProps={mapBlogProps(post)}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm text-Moderate-violet mb-2">{blogs.date}</p>
                <h1 className="text-4xl font-bold mb-8 max-w-2xl">{blogs.title}</h1>
                <img src={blogs.coverImage} alt={blogs.title} className="w-full mb-8" />
                <p className="text-base text-AuroMetal dark:text-white mb-3">{blogs.excerpt}</p>

                <div className="mb-6">
                    {blogs.content.map((block: ContentBlock) => {
                    if (block.type === 'text') {
                        const Tag = block.variant || 'p';
                        const alignClass = block.align === 'center' ? 'text-center max-w-[567px] mx-auto' : '';
                        const sizeClass = block.variant === 'h2' ? 'text-base font-bold leading-6' : 
                                        block.variant === 'h3' ? 'text-lg font-bold' : 
                                        'text-base font-normal';
                        return (
                        <Tag 
                            key={block.id} 
                            className={`text-AuroMetal dark:text-white leading-6 mb-3 ${sizeClass} ${alignClass}`}
                            dangerouslySetInnerHTML={{ __html: block.content }}
                            />
                        );
                    }
                    
                    if (block.type === 'image') {
                        return <img key={block.id} src={block.src} alt={block.alt} className="w-full mb-3" />;
                    }

                    if (block.type === 'list') {
                        const ListTag = block.ordered ? 'ol' : 'ul';
                        return (
                            <ListTag key={block.id} className="mb-4 ml-5 list-disc text-AuroMetal dark:text-white">
                            {block.items.map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                            </ListTag>
                        );
                        }
                    })}
                </div>
                <div className="flex gap-2">
                    {blogs.categories.map((cat: Category, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-sm ${cat.bgColor} ${cat.textColor}`}>
                            {cat.text}
                        </span>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex justify-center lg:justify-end pb-[42px] md:pb-[30px]">
            <NewsLetter newsLetter={newsLetterData}/>
        </div>
    </div>
  )
}

export default Blog
