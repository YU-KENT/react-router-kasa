import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

import SingleLogement from './pages/SingleLogement/SingleLogement';
import Error from './components/Error/Error'
import Apropos from './pages/Apropos/Apropos';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
    
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home />} />
       
           <Route path='logements/:logementId' element={<SingleLogement />}  />
           <Route path='/Apropos' element={<Apropos />} />
           <Route path="*"  element={<Error />}  />
             
        </Routes>
    </Router>
  </React.StrictMode>
);


