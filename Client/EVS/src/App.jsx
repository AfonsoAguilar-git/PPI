import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import Navbar from './Components/Navbar'

function App() {
  const [currentView, setCurrentView] = useState("LandingPage");
  const [isLoggedIn, setIsLoggedIn] = useState(false)

return (
  <section>
    {currentView === "LandingPage" && <LandingPage setView={setCurrentView} isLoggedIn={isLoggedIn} />}
    {currentView === "Login" && <LoginPage setView={setCurrentView} />}
  </section>
);
  
}

export default App
