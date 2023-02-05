import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    deleteTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload)
      state.tasks.splice(index, 1)
    },
    updateTasks: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.folderId === action.payload)
    },
  },
})

export default taskSlice.reducer
