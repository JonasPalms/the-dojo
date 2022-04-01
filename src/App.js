// styles
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages & components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Sidebar />
        <div className='container'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route path='/create' element={<Create />} />
            <Route path='/project/:id' element={<Project />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App
