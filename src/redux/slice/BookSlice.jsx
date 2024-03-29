import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { BookData } from '../../sharedComponents/data'

const initialState={
    task:BookData,
    books:[]
}

const BookSlice = createSlice({
    name:"BookSlice",
    initialState,
    reducers:{
        addbooks:(state,action) => {
            state.books.push(action.payload)
        },
        removeBook: (state,action) => {
            state.books = state.books.filter((book) => {
                console.log("book",action.payload.id);
              return action.payload.id != book.id
            })
          },
    }
})

export default BookSlice.reducer
export const {addbooks,removeTask,removeBook,updateTask} = BookSlice.actions