import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/about-me' element={<AboutMe />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
