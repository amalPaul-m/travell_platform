import Home from './pages/Home/home' 
import Search from './pages/search/search'
import Users from './pages/users/users'
import Profile from './pages/profile/profile'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    <div className="container-body overflow-x-hidden w-100">
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/users' element={<Users />} />
          <Route path='/profile' element={<Profile />} />

      </Routes>
    </BrowserRouter>
    </div>
    </> 
  )
}

export default App
