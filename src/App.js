import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { AddTask } from './pages/AddTask/AddTask'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddTask />} />
      </Routes>
    </>
  )
}