import { createSelector } from '@reduxjs/toolkit'

const FolderSelector = (state) => state.folders
const getFolderTasks = createSelector(FolderSelector, (folder) => folder.tasks)

export default FolderSelector
export { FoldersSelector, getFolderTasks }
