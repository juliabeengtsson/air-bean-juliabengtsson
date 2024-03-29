import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Nav from './pages/nav/nav';
import About from './pages/about/about';
import Menu from './pages/menu/menu';
import Status from './pages/status/status';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/nav" element={<Nav />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/status" element={<Status />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
