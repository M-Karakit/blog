import type { BlogCardProps } from "../BlogCard/BlogCard";

export interface HomePageProps {
    title: string;
    sectionHeader: string[];
    posts: BlogCardProps[];
}