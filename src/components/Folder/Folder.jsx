import './Folder.scss'
import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'
import { folderSlice } from '../../redux/FolderReducer/FolderReducer'
import { useDispatch, useSelector } from 'react-redux'

function Folder({ folderName, id }) {
  const dispatch = useDispatch()
  const { activeId } = useSelector((state) => state.FolderReducer)
  const { setActiveFolder, deleteFolder } = folderSlice.actions
  const [hover, setHover] = useState(false)

  return (
    <div
      className={activeId === id ? 'folder active' : 'folder'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => dispatch(setActiveFolder(id))}
    >
      <span className="folder__title">{folderName}</span>
      {hover && (
        <FeatherIcon
          className="folder__icon"
          icon="x"
          stroke={activeId === id ? '#fff' : '#000'}
          onClick={() => dispatch(deleteFolder(id))}
        />
      )}
    </div>
  )
}

export default Folder
