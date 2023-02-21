

import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import Searchx from './pages/Searchx';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/search" element={<Searchx />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
