import React, {useState} from 'react';
import Home from './pages/Home';
import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from 'react-router-dom';
import history from './browserHistory';
import DashBoard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  return (
    <HistoryRouter history={history} >
      <Routes>
        <Route path='/' element={<Home sendData={setUser}/>} />
        <Route path='/messenger' element={<DashBoard user={user} />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
