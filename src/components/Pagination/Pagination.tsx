import type { PaginationProps } from "../../interfaces/Pagination/Pagination"

const Pagination = ({currentPage, totalPages, onPageChange}: PaginationProps) => {
    if (totalPages <= 1) return null;

    const pages = () => {
        if (totalPages <= 7) return Array.from({length: totalPages}, (_, i) => i + 1);
        const leftStart = Math.min(Math.max(1, currentPage - 2), totalPages - 5);
        const left = [leftStart, leftStart + 1, leftStart + 2];
        const right = [totalPages - 2, totalPages - 1, totalPages];
        return [...left, '...', ...right];
    };

  return (
    <div className="flex flex-col gap-5 md:flex-row justify-between items-center pt-5 pb-5 md:pb-0 border-t border-b md:border-b-0 border-[#EAECF057] my-[30px] md:mb-[60px] lg:mb-[30px] px-8 lg:px-0">
        <div className="flex items-center gap-2 cursor-pointer">
            <img src="/assets/imgs/arrow-left.svg" alt="left-arrow-icon" className="dark:brightness-0 dark:invert" />
            <button 
                className="text-sm text-AuroMetal leading-5 font-medium dark:text-white"
                onClick={() => {
                    if (currentPage > 1) onPageChange(currentPage - 1)
                }}
                disabled={currentPage === 1}
            >
                Previous
            </button>
        </div>
        <div className="flex items-center gap-0.5">
            {pages().map((page, i) => 
                page === '...' ? (
                    <span key={`...${i}`} className="py-2.5 px-4 text-sm text-AuroMetal leading-5 font-medium dark:text-white">...</span>
                ) : (
                    <button
                        key={page}
                        className={`py-2.5 px-4 rounded-lg text-sm text-AuroMetal leading-5 font-medium ${currentPage === page ? 'bg-Blue-magenta dark:text-[#112211]' : 'dark:text-white'}`}
                        onClick={() => onPageChange(page as number)}
                    >
                        {page}
                    </button>
                )
            )}
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
            <button 
                className="text-sm text-AuroMetal leading-5 font-medium dark:text-white"
                onClick={() => {
                    if (currentPage < totalPages) onPageChange(currentPage + 1)
                }}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
            <img src="/assets/imgs/arrow-right.svg" alt="left-arrow-icon" className="dark:brightness-0 dark:invert"/>
        </div>
    </div>
  )
}

export default Pagination
