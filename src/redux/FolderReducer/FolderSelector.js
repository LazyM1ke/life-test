import { createSelector } from '@reduxjs/toolkit'

const FoldersSelector = (state) => state.folders
const getFolderName = createSelector(FoldersSelector, (folder) => folder.name)

export { FoldersSelector, getFolderName }
