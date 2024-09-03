import { Link} from 'react-router-dom'
import './NavBar.scss'

export const NavBar = () => {
    return (
        <>
            <nav className='nav'>
                <Link to='/' className='nav__link'>Home</Link>
                <Link to='/add' className='nav__link'>Task</Link>
            </nav>
        </>
    )
}