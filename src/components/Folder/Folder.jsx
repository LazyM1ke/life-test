import './Folder.scss'
import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'
import { folderSlice } from '../../redux/FolderReducer/FolderReducer'
import { useDispatch, useSelector } from 'react-redux'
import { taskSlice } from '../../redux/TaskReducer/TaskReducer'

function Folder({ folderName, id }) {
  const dispatch = useDispatch()
  const { activeFolderId } = useSelector((state) => state.FolderReducer)
  const { setActiveFolderId, deleteFolder, setActiveFolderName } = folderSlice.actions
  const { updateTasks } = taskSlice.actions
  const { tasks } = useSelector((state) => state.TaskReducer)
  const [hover, setHover] = useState(false)

  const handleOnClick = () => {
    dispatch(setActiveFolderId(id))
    dispatch(setActiveFolderName(folderName))
  }

  const onDeleteFolder = (e) => {
    e.stopPropagation()
    const filteredTasks = tasks.filter((task) => task.folderId === id)
    dispatch(deleteFolder(id))
    dispatch(updateTasks(filteredTasks))
    dispatch(setActiveFolderId('main'))
    dispatch(setActiveFolderName('Основные задачи'))
  }

  return (
    <div
      className={activeFolderId === id ? 'folder active' : 'folder'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleOnClick}
    >
      <span className="folder__title">{folderName}</span>

      {id !== 'main' && id !== 'archive' && hover && (
        <FeatherIcon
          className="folder__icon"
          icon="x"
          stroke={activeFolderId === id ? '#fff' : '#000'}
          onClick={onDeleteFolder}
        />
      )}
    </div>
  )
}

export default Folder
