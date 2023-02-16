import './App.css';
import FrontPage from './components/FrontPage.js';
import Causes from './components/CausesPage';
import Donate from './components/DonatePage';
import About from './components/AboutPage';
import Contact from './components/ContactPage';
import CSP from './components/CSP_Page';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <FrontPage/> } />
        <Route path="/causes" element={ <Causes/> } />
        <Route path="/donate" element={ <Donate/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/csp" element={ <CSP/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
