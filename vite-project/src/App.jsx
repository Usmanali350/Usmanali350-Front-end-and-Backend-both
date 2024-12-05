import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'

import RealEstate from './components/RealEstate'
import Property from './components/Property'
import More from './components/More'
import Login from './components/Login'
import './components/style.css'
import Products from './components/Products'
import FileUpload from './components/Fileupload'
import API from './components/API'                 

function App() {
  

  
    
   
  
  return (
    <>
    <Home />
   
      <Routes>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/API' element={<API/>}/>
        <Route path='/RealEstate' element={<RealEstate/>}/>
        <Route path='/Property' element={<Property  tittle="hello" about="  Lorem ipsum dolor sit amet consectetur adipisicing elit." Name="Usman" fname={"Muhammad Zada"} Marks="13" marks={false} isgender={false} isuser={false} isstudent={false}/>}/>
        <Route path='/More' element={<More/>}/>
        <Route path='/FileUpload' element={<FileUpload/>}/>
        <Route path='/Login' element={<Login/>}/>

      </Routes>
    
     
    

    </>
  )
}
export default App
