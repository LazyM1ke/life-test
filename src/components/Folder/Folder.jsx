import './Folder.scss'
import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'

function Folder({ folderName }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="folder"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="folder__title">{folderName}</div>
      {hover && (
        <FeatherIcon
          className="folder__icon"
          icon="x"
        />
      )}
    </div>
  )
}

export default Folder
