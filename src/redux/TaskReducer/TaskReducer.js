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
      const index = state.tasks.findIndex((task) => task.folderId === action.payload)
      state.tasks.splice(index, 1)
    },
    setActiveTaskId: (state, action) => {
      state.activeTaskId = action.payload
    },
    setActiveTaskName: (state, action) => {
      state.activeTaskName = action.payload
    },
    setTaskStatus(state, action) {
      state.tasks[action.payload].isDone = !state.tasks[action.payload].isDone
    },
  },
})

export default taskSlice.reducer
