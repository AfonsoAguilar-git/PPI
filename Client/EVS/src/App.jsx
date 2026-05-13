import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LandingPage from './Pages/LandingPage'
import AuthPage from './Pages/AuthPage'
import Navbar from './Components/Navbar'

function App() {
  const [currentView, setCurrentView] = useState("LandingPage");
  const [isLoggedIn, setIsLoggedIn] = useState(false)

return (
  <section className='h-100'>
    {currentView === "LandingPage" && <LandingPage setView={setCurrentView} isLoggedIn={isLoggedIn} />}
    {(currentView === "Login" || currentView === "SignUp") && <AuthPage setView={setCurrentView} currentView={currentView} />}
  </section>
);
  
}

export default App
