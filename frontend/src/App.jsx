import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
// import Search from '../components/Search'
import './App.css'
import Insert from '../pages/Insert'
import Get from '../pages/Get'
import GetReq from '../pages/GetReq'
import Delete from '../pages/Delete'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/insert' element={<Insert />}/>
          <Route path='/get' element={<Get />} />          
          <Route path='/get/req' element={<GetReq />} />          
          <Route path='/delete' element={<Delete />} />          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
