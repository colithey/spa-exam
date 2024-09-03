import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    ADD_TASK: (state) => {
        
    },
    REMOVE_TASK: (state) => {
      
    },
    TOGGLE_TASK: (state, action) => {
      
    },
  },
})

export const { } = taskSlice.actions

export default taskSlice.reducer