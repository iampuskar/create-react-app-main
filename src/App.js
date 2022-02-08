import React from 'react';
import WelcomePage from './component/WelcomePage'
import LoginPage from './component/LoginPage'
import BusinessProfile from './component/BusinessProfile';
import YourHourPage from './component/YourHourPage'
import Holiday from './component/Holiday';
import Integration from './component/Integration';
import YouAreIn from './component/YouAreIn';
import Done from './component/Done';
import SquareLogin from './component/SquareLogin';
import Upload from './component/Upload';
import Profile from './component/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<WelcomePage/>} />
      <Route  path="/business" element={<BusinessProfile/>} />
      <Route  path="/done" element={<Done/>} />
      <Route  path="/holiday" element={<Holiday/>} />
      <Route  path="/integration" element={<Integration/>} />
      <Route  path="/login" element={<LoginPage/>} />
      <Route  path="/profile" element={<Profile/>} />
      <Route  path="/squarelogin" element={<SquareLogin/>} />
      <Route  path="/upload" element={<Upload/>} />
      <Route  path="/youarein" element={<YouAreIn/>} />
      <Route  path="/yourhour" element={<YourHourPage/>} />
      </Routes>
    </Router>
  )
};

export default App;
