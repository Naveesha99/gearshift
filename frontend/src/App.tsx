import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Auth/Register'

const App: React.FC = () => {
  const location = useLocation();
  
  // Hide Navbar and Footer on the /auth/register page
  const hideNavbarAndFooter = location.pathname === '/auth/register';

  return (
    <div>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  )
}

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
)

export default AppWrapper;
