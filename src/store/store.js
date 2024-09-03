import { configureStore } from '@reduxjs/toolkit'
import { taskSlice } from '../api/reducer'

export const store = configureStore({
  reducer: {
    task: taskSlice
  },
})