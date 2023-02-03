import './Header.scss'
import Logo from '../../assets/images/logo.svg'
import pauseIcon from '../../assets/icons/pause.svg'

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src={Logo}
          alt="logo"
        />
        <p className="header__logo-title">LifeTest</p>
      </div>
      <div className="header__wrapper">
        <div className="header__task">
          <p className="header__task-title">Сделать UI-kit</p>
          <img
            className="header__task-icon"
            src={pauseIcon}
            alt="pauseIcon"
          />
        </div>
        <div className="header__task-time">
          <div>Сегодня: </div>
          <span>0:20:42</span>
        </div>
      </div>
    </div>
  )
}

export default Header
