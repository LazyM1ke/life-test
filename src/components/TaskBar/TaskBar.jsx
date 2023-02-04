import './TaskBar.scss'
import { ReactComponent as PauseIcon } from '../../assets/icons/pause.svg'
import { ReactComponent as ArchiveIcon } from '../../assets/icons/archive.svg'
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg'

function TaskBar() {
  return (
    <div className="task-bar">
      <div className="task-bar__title">Добавить задачу</div>
      <div className="task-bar__folder">Основные задачи</div>
      <div className="task-bar__time">
        <div className="task-bar__time-item">
          <div className="task-bar__time-title">сегодня</div>
          <span>00:20:15</span>
        </div>
        <PauseIcon />
        <div className="task-bar__time-item">
          <div className="task-bar__time-title">всего</div>
          <span>13:20:15</span>
        </div>
      </div>
      <div className="task-bar__tools">
        <div className="task-bar__tools-item">
          <input type="checkbox" />
          <span className="task-bar__tools-name">Выполнено</span>
        </div>
        <div className="task-bar__tools-item">
          <ArchiveIcon />
          <span className="task-bar__tools-name">В архив</span>
        </div>
        <div className="task-bar__tools-item">
          <TrashIcon />
          <span className="task-bar__tools-delete">Удалить задачу</span>
        </div>
      </div>
    </div>
  )
}

export default TaskBar
