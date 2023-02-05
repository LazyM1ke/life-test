import './Task.scss'
import { useDispatch, useSelector } from 'react-redux'
import { taskSlice } from '../../redux/TaskReducer/TaskReducer'
import { useState } from 'react'

function Task({ taskName, taskTotalTime, taskId }) {
  const dispatch = useDispatch()
  const { setTaskStatus, setActiveTaskId, setActiveTaskName } = taskSlice.actions
  const { tasks } = useSelector((state) => state.TaskReducer)
  const [checked, setChecked] = useState(false)
  // console.log(checked)

  const handleOnClick = () => {
    setChecked((prevState) => !prevState)
    dispatch(setActiveTaskId(taskId))
    dispatch(setActiveTaskName(taskName))
  }
  const handleOnChecked = () => {
    const currentIndex = tasks.findIndex((task) => task.id === taskId)
    dispatch(setTaskStatus(currentIndex))
  }

  return (
    <div
      className="task"
      onClick={handleOnClick}
    >
      <div className="task__title">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleOnChecked}
        />
        <p className="task__title-name">{taskName}</p>
      </div>
      <p className="task__time">{taskTotalTime}</p>
    </div>
  )
}

export default Task
