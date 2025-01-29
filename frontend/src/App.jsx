import {BrowserRouter, Route, Routes } from 'react-router-dom'

// import Search from '../components/Search'
import './App.css'
import Home from '../components/Home'

import Insert from '../pages/Insert'
import Get from '../pages/Get'
import Delete from '../pages/Delete'
import GetConstraints from '../pages/getConstraints'
import UploadFile from '../pages/UploadFile'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/insert' element={<Insert />}/>
          <Route path='/get' element={<Get />} />          
          {/* <Route path='/get/req' element={<GetReq />} />           */}
          <Route path='/delete' element={<Delete />} />          
          <Route path='/getc' element={<GetConstraints />} />          
          <Route path='/upload' element={<UploadFile />} />          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
