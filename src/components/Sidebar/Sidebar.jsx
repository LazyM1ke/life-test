import './Sidebar.scss'
import FeatherIcon from 'feather-icons-react'
import Folder from '../Folder/Folder'
import { useState } from 'react'

function Sidebar() {
  const [folderName, setFolderName] = useState('Добавить папку')
  const folders = [1, 2, 3, 4]

  return (
    <div className="sidebar">
      <div className="sidebar__top ">
        <FeatherIcon
          icon="folder-plus"
          stroke="#787878"
        />
        <div>{folderName}</div>
      </div>
      <div className="sidebar__items">
        {folders.map((item, index) => (
          <Folder key={index} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
