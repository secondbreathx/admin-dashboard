
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


import './App.css';

import Register from './components/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import FileUpload from './components/FileUpload';
import Team from './components/Team';
import Kpi from './components/Kpi';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/upload' element={<FileUpload/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/team' element={<Team/>}></Route>
      <Route path='/kpi' element={<Kpi/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
