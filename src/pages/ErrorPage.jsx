import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Error404Img from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-1 my-20 max-w-[1440px] mx-auto flex justify-center items-center flex-col gap-4">
          <img src={Error404Img} alt="404 Error" />
          <h2 className="font-bold text-5xl text-[#001931]">
            Oops, page not found!
          </h2>
          <p className="text-[#627382] mt-4">
            The page you are looking for is not available.
          </p>
          <Link to="/">
            <button className="btn btn-wide bg-linear-65 from-[#632EE3] to-[#9F62F2] text-white">
              Go Back!
            </button>
          </Link>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default ErrorPage;