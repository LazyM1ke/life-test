import './Sidebar.scss'
import FeatherIcon from 'feather-icons-react'
import Folder from '../Folder/Folder'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { folderSlice } from '../../redux/FolderReducer/FolderReducer'

function Sidebar() {
  const dispatch = useDispatch()
  const { addFolder } = folderSlice.actions
  const [inputValue, setInputValue] = useState('Добавить папку')
  const [inputOpened, setInputOpened] = useState(false)
  // const folders = [1, 2, 3, 4]
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
        name: inputValue,
        tasks: [],
        active: false,
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
              />
            </form>
          </div>
        ) : (
          <div onClick={handleOnClick}>{inputValue}</div>
        )}
      </div>
      <div className="sidebar__items">
        {folders.map((item, index) => (
          <Folder
            key={index}
            folderName={item.name}
          />
        ))}
      </div>
    </div>
  )
}

//
// {inputOpened ? (
//   <input type="text" />
// ) : (
//   <div onClick={() => setInputOpened(true)}>{folderName}</div>
// )}
export default Sidebar
