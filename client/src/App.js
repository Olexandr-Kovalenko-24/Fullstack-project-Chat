import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import history from './browserHistory';
import DashBoard from './pages/Dashboard';
import { connect } from 'react-redux';

function App(props) {

  useEffect(() => {
    toast(props.notification, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }, [props.notification]);

  return (
    <HistoryRouter history={history} >
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/messenger' element={<DashBoard />} />
      </Routes>
    </HistoryRouter>
  );
}

const mapStateToProps = ({ notification }) => ({ notification });

export default connect(mapStateToProps)(App);
