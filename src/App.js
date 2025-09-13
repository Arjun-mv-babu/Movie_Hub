import './App.css';
import { Routes,Route } from 'react-router-dom';
import Movies from './components/Movies';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/" element={<Sidebar />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
  );
}

export default App;
