
import './App.css'
// import CallToAction from './layouts/CallToAction';
// import Footer from './layouts/Footer';
// import AboutPage from './pages/AboutPage';
import BerandaPage from './pages/BerandaPage';
// import ActivitiesPage from './pages/ActivityPage';
// import Question from './layouts/Question';
// import FAQPage from './pages/FAQPage';
// import HeroPage from './pages/HeroPage';
// import LearningPage from './pages/LearningPage';
// import TeamPages from './pages/TeamPages';
import { Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
// import TeamNav from './layouts/TeamNav';
// import AboutPage from './pages/AboutPage';
// import LearningPage from './pages/LearningPage';
// import HeroPage from './pages/HeroPage'
// import CallToAction from './layouts/CallToAction';
// import { CardProfile } from './components/ui/custom-card';
// import TeamPages from './pages/TeamPages';
// import { Button } from './components/ui/button'
// import CardNav from './CardNav'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<BerandaPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
    </>
  )
}

export default App;