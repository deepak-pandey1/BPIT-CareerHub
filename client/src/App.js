// App.js
import './App.css';
import './style.css';
import Header from './Component/Header/Header';
import Footer from './Component/Header/Footer';
import Home from './Component/MainComponent/Home';
import About from './Component/MainComponent/About';
import Contact from './Component/MainComponent/Contact';
import Faq from './Component/MainComponent/Faq';
import Signup from './Component/MainComponent/Signup';
import Company from './Component/MainComponent/Company';
import Login from './Component/MainComponent/Login';
import Apply from './Component/MainComponent/Apply';
import Community from './Component/MainComponent/Community';
import Profile from './Component/MainComponent/Profile';
import Admin from './Component/MainComponent/Admin';
import Internship from './Component/MainComponent/Internship';
import Gamification from './Component/MainComponent/Gamification';
import Alumni from './Component/MainComponent/Alumni';
import Referral from './Component/MainComponent/Referral';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from './Component/Loader';

// 👇 This component now uses useLocation and screen size to hide Header conditionally
function AppContent({ user, setLoginUser }) {
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isCommunityOnSmallScreen = location.pathname === '/Community' && isSmallScreen;

  return (
    <>
      {/* Hide Header only on Community page AND small screens */}
      {!isCommunityOnSmallScreen && <Header />}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Company" element={<Company />} />
          <Route
            path="/Apply"
            element={
              user && user._id ? (
                <Apply setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Internship" element={<Internship />} />
          <Route path="/Gamification" element={<Gamification />} />
          <Route path="/Alumni" element={<Alumni />} />
          <Route path="/Referral" element={<Referral />} />
        </Routes>
      </main>

      {/* Hide Footer on Community page only */}
      {location.pathname !== '/Community' && <Footer />}
    </>
  );
}

function App() {
  const [user, setLoginUser] = useState({});
  const [showLoader, setShowLoader] = useState(true);
  const [startFade, setStartFade] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStartFade(true), 3000);
    const timer2 = setTimeout(() => setShowLoader(false), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="page-wrapper">
      {showLoader && <Loader fadeOut={startFade} />}
      <BrowserRouter>
        <AppContent user={user} setLoginUser={setLoginUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
