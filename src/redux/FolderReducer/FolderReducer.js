import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const folderSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    addFolder: (state, action) => {
      state.folders.push(action.payload)
    },
  },
})

export default folderSlice.reducer
