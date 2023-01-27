import React, {useState} from 'react';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DashBoard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home sendData={setUser}/>} />
        <Route path='/messenger' element={<DashBoard user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
