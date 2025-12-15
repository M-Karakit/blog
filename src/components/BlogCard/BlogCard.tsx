import { useNavigate } from "react-router-dom";
import type { BlogCardProps } from "../../interfaces/BlogCard/BlogCard"

interface BlogCard {
    blogProps: BlogCardProps;
    layout?: 'vertical' | 'horizontal';
    textSize?: string;
    imageSize?: string;
    containerSize?: string;
    maxChars?: number;
    className?: string;
}

const BlogCard = ({ blogProps, layout = 'vertical', textSize, imageSize, containerSize, maxChars, className = "" }: BlogCard) => {
    const navigate = useNavigate();
    const isHorizontal = layout === 'horizontal';

    const wrapperClass = isHorizontal 
        ? `flex w-full gap-6 ${className}` 
        : `w-full ${className}`;

    const imageClass = () => {
        if (isHorizontal) return imageSize || "";
        return imageSize ? `${imageSize} mb-8` : "w-full mb-8 h-60";
    };

    const titleClass = textSize 
        ? textSize 
        : (isHorizontal ? "text-lg leading-8 font-semibold" : "text-2xl leading-8 font-semibold");

  return (
      <div className={wrapperClass}>
          <div className={imageClass()}>
              <img 
                  src={blogProps.cover} 
                  alt={blogProps.title} 
                  className="w-full h-full object-cover" 
              />
          </div>
          <div className={containerSize || "w-full"}>
              <div className="flex items-center mb-3">
                  <h2 className="text-sm text-Moderate-violet font-semibold">{blogProps.author}</h2>
                  <p className="text-sm text-Moderate-violet font-semibold">{blogProps.date}</p>
              </div>
              <div className="flex justify-between items-center mb-3">
                  <h1 className={titleClass}>{blogProps.title}</h1>
                  <img src="/assets/imgs/arrow-up-right.svg" alt="arrow-icon" className="dark:invert" onClick={() => navigate(`/blog/${blogProps.id}`)} />
              </div>
              <p className="text-base text-AuroMetal dark:text-white font-normal leading-6 mb-6">
                  {maxChars && blogProps.description.length > maxChars
                      ? blogProps.description.slice(0, maxChars) + '...'
                      : blogProps.description}
              </p>
              <div className="flex items-center gap-2">
                  {blogProps.categories.map((category, index) => (
                      <button 
                          key={index} 
                          className={`py-0.5 px-2.5 rounded-full text-sm leading-5 font-medium ${category.bgColor} ${category.textColor}`}
                      >
                          {category.text}
                      </button>
                  ))}
              </div>
          </div>
      </div>
  );
}

export default BlogCard;