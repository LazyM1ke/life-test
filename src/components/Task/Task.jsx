import './Task.scss'

function Task() {
  return (
    <div className="task">
      <div className="task__title">
        <input type="checkbox" />
        <p className="task__title-name">Провести митап</p>
      </div>
      <p className="task__time">03:12:12</p>
    </div>
  )
}

export default Task
