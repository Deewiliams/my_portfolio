import './App.css';
import Navigation from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Pages/MainPage';
function App() {
  return (
    <div className="App">
      <Navigation />
      <MainPage />
    </div>
  );
}

export default App;
