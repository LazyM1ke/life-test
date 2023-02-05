import './Sidebar.scss'
import FeatherIcon from 'feather-icons-react'
import Folder from '../Folder/Folder'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { folderSlice } from '../../redux/FolderReducer/FolderReducer'
import uuid from 'react-uuid'

function Sidebar() {
  const dispatch = useDispatch()
  const { addFolder } = folderSlice.actions
  const [inputValue, setInputValue] = useState('Добавить папку')
  const [inputOpened, setInputOpened] = useState(false)
  const { folders } = useSelector((state) => state.FolderReducer)

  const inputRef = useRef(null)

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
      addFolder({
        id: uuid(),
        name: inputValue,
        tasks: [],
        isActive: false,
      }),
    )
    setInputOpened(false)
    setInputValue('Добавить папку')
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top ">
        <FeatherIcon
          icon="folder-plus"
          stroke="#787878"
        />
        {inputOpened ? (
          <div className="sidebar__top-input">
            <form onSubmit={handleOnSubmit}>
              <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                ref={inputRef}
                maxLength="32"
              />
            </form>
          </div>
        ) : (
          <div onClick={handleOnClick}>{inputValue}</div>
        )}
      </div>
      <div className="sidebar__items">
        <Folder
          folderName={'Основные задачи'}
          id={'main'}
        />
        <Folder
          folderName={'Архив'}
          id={'archive'}
        />
        {folders.map((item) => (
          <Folder
            id={item.id}
            key={item.id}
            folderName={item.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
