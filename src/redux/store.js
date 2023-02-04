import { combineReducers, configureStore } from '@reduxjs/toolkit'
import FolderReducer from './FolderReducer'

const rootReducer = combineReducers({
  FolderReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
