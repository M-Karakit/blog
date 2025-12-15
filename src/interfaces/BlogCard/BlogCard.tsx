export interface BlogCardProps {
    id: number
    title: string,
    author: string,
    date: string,
    description: string,
    cover: string,
    categories: {
        text: string,
        bgColor: string,
        textColor: string,
    }[]
}