export interface Blog {
  id: number;
  title: string;
  date: string;
  author: string;
  coverImage: string;
  excerpt: string;
  categories: Category[];
  content: ContentBlock[];
}

export interface Category {
  text: string;
  bgColor: string;
  textColor: string;
}

export type ContentBlock = TextBlock | ImageBlock | ListBlock;

interface BaseBlock {
    id: number;
    type: string;
}

export interface TextBlock extends BaseBlock {
  type: 'text';
  content: string;
  variant?: 'p' | 'h2' | 'h3';
  align?: 'left' | 'center';
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  src: string;
  alt: string;
}

export interface ListBlock extends BaseBlock {
  type: 'list';
  items: string[];
  ordered?: 'ol' | 'ul';
}
