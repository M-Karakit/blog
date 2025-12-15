export interface PaginationState {
    currentPage: number;
    cardsPerPage: number;
    totalCards: number;
    totalPages: number;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}