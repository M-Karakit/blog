import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Blog } from "../../interfaces/Blog/Blog";
import { blogData } from "../../Data/Blog/BlogData";
import type { PaginationState } from "../../interfaces/Pagination/Pagination";

interface blogState {
    data: Blog[]
    pagination: PaginationState
}

const initialState: blogState = {
    data: blogData,
    pagination: {
        currentPage: 1,
        cardsPerPage: 6,
        totalCards: blogData.length,
        totalPages: Math.ceil(blogData.length / 6)
    }
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        currentPage: (state, action: PayloadAction<number>) => {
            state.pagination.currentPage = action.payload
        },
        cardsPerPage: (state, action: PayloadAction<number>) => {
            state.pagination.cardsPerPage = action.payload;
            state.pagination.totalPages = Math.ceil(state.data.length / action.payload);
            state.pagination.currentPage = 1;
        }
    }
})

export const { currentPage, cardsPerPage } = blogSlice.actions

export default blogSlice.reducer;