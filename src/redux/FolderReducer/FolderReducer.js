import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

export const folderSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    addFolder: (state, action) => {
      state.folders.push(action.payload)
    },
    setActiveFolder: (state, action) => {
      state.activeId = action.payload
    },
    deleteFolder: (state, action) => {
      const index = state.folders.findIndex((folder) => folder.id === action.payload)
      state.folders.splice(index, 1)
    },
  },
})

export default folderSlice.reducer
