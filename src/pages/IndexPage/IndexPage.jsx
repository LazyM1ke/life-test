import './IndexPage.scss'
import Sidebar from '../../components/Sidebar'
import FeatherIcon from 'feather-icons-react'
import Task from '../../components/Task'
import TaskBar from '../../components/TaskBar'

function IndexPage() {
  return (
    <div className="index-page">
      <Sidebar />

      <div className="main">
        <div className="main__sort">
          <div className="main__folder">Задачи Дениса</div>
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
          <p className="main__task-add">Добавить задачу</p>
        </div>
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
      <TaskBar />
    </div>
  )
}

export default IndexPage
