// Defaults
import React from 'react';
import './index.css'

// Libs
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Into platform
import {   Menu    } from './components/Menu.jsx';
import {  Pastors  } from './pages/Pastors.jsx';
import {  Events   } from './pages/Events.jsx';
import { Community } from './pages/Community.jsx';
import {   User    } from './pages/User.jsx';
import {  Enter    } from './pages/Enter.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='Enter' element={<Enter />}/>
        <Route  path='/' element={<Menu />}>
        <Route index   element={ <Pastors />} />
          <Route path='Pastors'   element={ <Pastors />} />
          <Route path='Events'    element={ <Events />} />
          <Route path='Community' element={ <Community />} />
          <Route path='User'      element={ <User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode> <App /> </React.StrictMode>);