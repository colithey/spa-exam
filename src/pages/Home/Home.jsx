import { Link, NavLink } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import './Home.scss'
import { TaskList } from '../../components/TaskList';

const Home = () => {
    return (
        <section className='home'>
            <div className="container">
                <Header />
                <NavLink to='/add'><button>Добавить задачу</button></NavLink>
                <TaskList />
            </div>
        </section>
    )
}

export default Home;