import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <AllRoutes/>
      </header>
    </div>
  );
}

export default App;
