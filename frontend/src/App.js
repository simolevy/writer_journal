import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';
import JournalPage from './components/JournalPage';
import { Generate } from './components/Generate';
import About from './pages/About';
import Write from './pages/Write';
import Journal from './pages/Journal';

function App() {
  return (
    <Router>
        <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/write" element={<Write />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>  
      </div>
    </Router>
    
  );
}

export default App;
