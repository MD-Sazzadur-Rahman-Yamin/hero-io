import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import LoadingScreen from './components/LoadingScreen';

const Root = () => {
  const navigation = useNavigation()

    return (
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-1 ">
          {navigation.state == "loading" ? (
            <LoadingScreen></LoadingScreen>
          ) : (
            <Outlet></Outlet>
          )}
        </div>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default Root;