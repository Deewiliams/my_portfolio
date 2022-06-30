import './App.css';
import Navigation from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Pages/MainPage';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
