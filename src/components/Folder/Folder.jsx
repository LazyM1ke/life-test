import './Folder.scss'
import FeatherIcon from 'feather-icons-react'

function Folder({ activeFolder }) {
  return (
    <div className="folder">
      <div className="folder__title">Задачи Дениса</div>
      <FeatherIcon
        className="folder__icon"
        icon="x"
      />
    </div>
  )
}

export default Folder
