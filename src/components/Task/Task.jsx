import './Task.scss'

function Task({ taskName, taskTotalTime, activeFolderId }) {
  return (
    <div className="task">
      <div className="task__title">
        <input type="checkbox" />
        <p className="task__title-name">{taskName}</p>
      </div>
      <p className="task__time">{taskTotalTime}</p>
      <div>{activeFolderId}</div>
    </div>
  )
}

export default Task
