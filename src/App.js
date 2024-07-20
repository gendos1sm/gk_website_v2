import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import About from './pages/About';
import Courses from './pages/Courses';
import CreateCourse from './pages/CreateCourse';
import Coaches from './pages/Coaches';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavigationBar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;