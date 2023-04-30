import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import './index.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from'./components/Footer/Footer'
import SingleLogement from './pages/SingleLogement/SingleLogement';
import ErrorPage from './pages/Error/Error'
import Apropos from './pages/Apropos/Apropos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

const Error = (props)=>{
  useEffect(()=>props.handleShow(false),[]);
  return <><ErrorPage/></>
}

function App() {
const {id} = useParams()
const [show,setShow] = useState(true);
   useEffect(()=>{
      setShow(true)
   },[id])

return (
  <React.StrictMode>
    <Router>
      <Header/>
        <Routes>
           <Route exact path='/' element={<Home />} />
           <Route path='logements/:logementId' element={<SingleLogement />}  />
           <Route path='/Apropos' element={<Apropos />} />
           <Route path="*" element={<Error handleShow={(res)=>setShow(false)} />} />
        </Routes>
       {show&&<Footer/>}
    </Router>
  </React.StrictMode>
);

}

export default App