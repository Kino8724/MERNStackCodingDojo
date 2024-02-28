import style from '../css/MainContent.module.css'
import SubContent from './SubContent'
import Advertisement from './Advertisement'

const MainContent = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <SubContent />
        <SubContent />
        <SubContent />
      </div>
      <Advertisement />
    </div>
  )
}

export default MainContent
