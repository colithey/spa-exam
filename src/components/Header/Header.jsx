import { NavBar } from '../NavBar/NavBar'
import './Header.scss'

export const Header = () => {
    return (
        <>
            <header className='header' id='header'>
                <div className='container header__container'>
                    <div className='header__logo'>
                        <p className='header__text'>TASKS</p>
                    </div>
                    <NavBar />

                </div>
            </header>
        </>
    )
}