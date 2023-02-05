import './IndexPage.scss'
import Sidebar from '../../components/Sidebar'
import TaskBar from '../../components/TaskBar'
import MainSection from '../../components/MainSection'

function IndexPage() {
  return (
    <div className="index-page">
      <Sidebar />
      <MainSection />
      <TaskBar />
    </div>
  )
}

export default IndexPage
