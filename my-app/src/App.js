import './App.css';
import { React, Fragment } from "react";
import {BrowserRouter as Router} from "react-router-dom"
import { Route, Routes} from "react-router";
// some JSX here

import Login from './components/login/Login';
import Register from './components/register/Register';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>

  );
}

export default App;
