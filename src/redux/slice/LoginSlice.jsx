import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState ={
    taskList: [
        {
          id: 1,
          firstName: "Roger",
          lastName: "Lum",
          img: "../../300-11.jpg",
          email: "raj@gmail.com",
          password: "1234",
        },
      ],
}

const LoginSlice = createSlice({
    name: "LoginSlice",
    initialState,
    reducers: {
      addUser: (state, action) => {
        state.taskList.push(action.payload);
      },
    },
})

export default LoginSlice.reducer
export const {addUser} = LoginSlice.actions