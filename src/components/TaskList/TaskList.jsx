import './TaskList.scss'
import logo from '../../assets/images/logo.svg'

export const TaskList = () => {
    return (
        <>
            <div className='task'>
                <div className='task__logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='task__text'>
                    <p className='task__title'>ТЕСТОВОЕ ЗАДАНИЕ</p>
                    <p className='task__desc'>ОПИСАНИЕ</p>
                </div>
            </div>
        </>
    )
}