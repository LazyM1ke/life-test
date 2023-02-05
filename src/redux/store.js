import { combineReducers, configureStore } from '@reduxjs/toolkit'
import FolderReducer from './FolderReducer'
import TaskReducer from './TaskReducer/TaskReducer'

const rootReducer = combineReducers({
  FolderReducer,
  TaskReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
