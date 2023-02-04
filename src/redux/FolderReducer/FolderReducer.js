import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

export const folderSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    addFolder: (state, action) => {
      state.folders.push(action.payload)
    },
    deleteFolder: (state, action) => {
      state.folders.splice(action.payload, 1)
    },
  },
})

export default folderSlice.reducer
