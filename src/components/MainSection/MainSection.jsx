import './MainSection.scss'
import FeatherIcon from 'feather-icons-react'
import Task from '../Task'
import { useEffect, useRef, useState } from 'react'
import uuid from 'react-uuid'
import { useDispatch, useSelector } from 'react-redux'
import { taskSlice } from '../../redux/TaskReducer/TaskReducer'

function MainSection() {
  const dispatch = useDispatch()
  const { addTask } = taskSlice.actions
  const [inputValue, setInputValue] = useState('Добавить задачу')
  const [inputOpened, setInputOpened] = useState(false)
  const { tasks } = useSelector((state) => state.TaskReducer)
  const { activeFolderName, activeFolderId } = useSelector((state) => state.FolderReducer)

  const inputRef = useRef(null)

  const filteredTasks = tasks.filter((task) => task.folderId === activeFolderId)

  useEffect(() => {
    inputRef.current?.focus()
  }, [inputOpened])

  const handleOnClick = () => {
    setInputOpened(true)
    setInputValue('')
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addTask({
        id: uuid(),
        name: inputValue,
        total_time: '13:20:15',
        today_time: '00:20:15',
        isDone: false,
        folderId: activeFolderId,
      }),
    )
    setInputOpened(false)
    setInputValue('Добавить задачу')
  }

  return (
    <div className="main">
      <div className="main__sort">
        <div className="main__folder">{activeFolderName}</div>
        <div className="main__sort-title">
          <FeatherIcon
            icon="filter"
            stroke="#205EFF"
          />
          <p>Сортировка</p>
        </div>
      </div>

      <div className="main__titles">
        <div>задача</div>
        <div>время</div>
      </div>

      <div className="main__task">
        <FeatherIcon
          icon="plus"
          stroke="#787878"
        />
        {inputOpened ? (
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              ref={inputRef}
              maxLength="64"
            />
          </form>
        ) : (
          <div onClick={handleOnClick}>{inputValue}</div>
        )}
      </div>
      {filteredTasks.map((task) => (
        <Task
          key={uuid()}
          taskName={task.name}
          taskTotalTime={task.total_time}
          taskId={task.id}
          activeFolderId={activeFolderId}
        />
      ))}
    </div>
  )
}

export default MainSection
