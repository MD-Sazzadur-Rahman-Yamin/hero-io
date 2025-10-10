import React from 'react';
import noAppImg from "../assets/App-Error.png";
import { Link } from 'react-router';

const NoAppFound = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 my-20 max-w-[1440px] mx-auto flex justify-center items-center flex-col gap-4">
          <img src={noAppImg} alt="404 Error" />
          <h2 className="font-bold text-5xl text-[#001931]">
            OPPS!! APP NOT FOUND
          </h2>
          <p className="text-[#627382] mt-4">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link to="/">
            <button className="btn btn-wide bg-linear-65 from-[#632EE3] to-[#9F62F2] text-white">
              Go Back!
            </button>
          </Link>
        </div>
      </div>
    );
};

export default NoAppFound;