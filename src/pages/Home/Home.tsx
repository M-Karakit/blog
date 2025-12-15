import { useDispatch, useSelector } from "react-redux"
import BlogCard from "../../components/BlogCard/BlogCard"
import type { HomePageProps } from "../../interfaces/Home/Home"
import type { RootState } from "../../state/store"
import Pagination from "../../components/Pagination/Pagination"
import { useMemo } from "react"
import { currentPage } from "../../state/blog/blogSlice"

interface HomeProps {
    homeProps: HomePageProps
}

const Home = ({homeProps}: HomeProps) => {
  const blogs = useSelector((state: RootState) => state.blog.data)
  const recentBlogs = blogs.slice(-4)
  const dispatch = useDispatch()
  const pagination = useSelector((state: RootState) => state.blog.pagination)

  const paginatedBlogs = useMemo(() => {
    const startIndex = (pagination.currentPage - 1) * pagination.cardsPerPage
    const endIndex = startIndex + pagination.cardsPerPage
    return blogs.slice(startIndex, endIndex)
  }, [blogs, pagination.currentPage, pagination.cardsPerPage])

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
    <div className="lg:px-[7.77777vw] w-full">
        <h1 className="text-center border-t border-b border-[#00000057] dark:border-white text-7xl md:text-[160.8px] lg:text-[16.93055vw] leading-none font-bold my-5 md:mt-[30px] lg:mt-5 md:mb-[30px]">{homeProps.title}</h1>
        <div className="w-full px-8 md:py-[30px] md:pb-0 lg:px-0 lg:py-[30px]">
          <h2 className="mb-8 text-2xl leading-8 font-semibold">{homeProps.sectionHeader[0]}</h2>
          <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-8 mb-[30px]">
              <BlogCard 
                key={recentBlogs[0].id} 
                imageSize="h-[228px] md:h-[228px] lg:h-[224px]"
                blogProps={mapBlogProps(recentBlogs[0])} 
              />
            
            <div className="col-span-1 flex flex-col gap-8">
              {recentBlogs.slice(1, 3).map((blog) => (
                <BlogCard 
                  key={blog.id} 
                  layout="horizontal"
                  imageSize="w-full h-[228px] md:h-[200px]"
                  containerSize="w-full lg:max-w-[248px]"
                  maxChars={100}
                  className="flex-col md:flex-row"
                  blogProps={mapBlogProps(blog)}
                />
              ))}
            </div>
          </div>
              <div className="pt-[30px]">
                <BlogCard 
                  key={recentBlogs[3].id} 
                  layout="horizontal"
                  textSize="text-2xl font-semibold"
                  containerSize="w-full lg:max-w-[592px]"
                  imageSize="w-full h-[228px] md:h-[188px] lg:h-auto lg:max-h-[246px]"
                  className="flex-col lg:flex-row"
                  blogProps={mapBlogProps(recentBlogs[3])} 
                />
              </div>
        </div>
        <div className="w-full px-8 pt-[30px] lg:px-0 lg:py-[30px]">
          <h2 className="mb-8 text-2xl leading-8 font-semibold">{homeProps.sectionHeader[1]}</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-4 md:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {paginatedBlogs?.map(blog => (
              <BlogCard key={blog.id} layout="vertical" maxChars={90} blogProps={mapBlogProps(blog)} />
            ))}
          </div>
        </div>
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} onPageChange={(page) => dispatch(currentPage(page))} />
    </div>
  )
}

export default Home
