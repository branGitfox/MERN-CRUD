import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserList from './components/UserList'
import NotFound from './components/NotFound'
import CreateUser from './components/CreateUser'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<UserList/>}/>
              <Route path='/createUser' element={<CreateUser/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
