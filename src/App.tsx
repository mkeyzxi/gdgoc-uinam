
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
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './lib/ProtectedRoute';
import AddActivityPage from './pages/AddActivityPage';
import { AuthProvider } from './lib/AuthContext';
import ActivityListPage from './pages/ActivityListPage';
import DetailNav from './components/DetailNav';
// import HeroPages from './pages/HeroPages';
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
      <AuthProvider>
        <Routes>
          <Route path="/" element={<BerandaPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          {/* <Route path="/hero" element={<HeroPages />}></Route> */}
          <Route path="/addActivity" element={<ProtectedRoute >
            <AddActivityPage />
          </ProtectedRoute>}></Route>
          <Route path="/listActivity" element={<ProtectedRoute >
            <ActivityListPage />
          </ProtectedRoute>}></Route>
            <Route path="/detail" element={<DetailNav ></DetailNav>}></Route>


        </Routes>
      </AuthProvider>
    </>
  )
}

export default App;