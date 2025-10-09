import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadsImg from "../assets/icon-downloads.png";
import { toast } from "react-toastify";

const AppDetils = () => {
  const { id } = useParams();
  const numId = parseInt(id);
  const appData = useLoaderData();
  const singleAppData = appData.find((book) => book.id === numId);
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = singleAppData;
    const [installed, setInstalled] = useState(() => {
      const existentList =JSON.parse(localStorage.getItem("InstalledApp")) || [];
      return existentList.some((appId) => parseInt(appId) === singleAppData.id);
    });

    const InstallAppBtn = () => {
      const existentList =
        JSON.parse(localStorage.getItem("InstalledApp")) || [];
      const updatedList = [...existentList, id];
      localStorage.setItem("InstalledApp", JSON.stringify(updatedList));
      setInstalled(true);
      toast("App installed successfully");
    };

  return (
    <div className="max-w-[1440px] mx-auto my-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="flex-1">
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="flex-3 flex flex-col justify-between gap-8">
          <div>
            <h2 className="font-bold text-3xl">{title}</h2>
            <h4 className="font-semibold text-xl mt-2">
              <span className="text-[#627382]">Developed by:</span>
              <span className="text-[#632EE3]">{companyName}</span>
            </h4>
          </div>
          <hr />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center">
              <img src={downloadsImg} alt="downloads" />
              <p className="my-2">Downloads</p>
              <h6 className="font-extrabold text-4xl">{downloads}</h6>
            </div>
            <div className="flex flex-col items-center">
              <img src={downloadsImg} alt="downloads" />
              <p className="my-2">Average Ratings</p>
              <h6 className="font-extrabold text-4xl">{ratingAvg}</h6>
            </div>
            <div className="flex flex-col items-center">
              <img src={downloadsImg} alt="downloads" />
              <p className="my-2">Total Reviews</p>
              <h6 className="font-extrabold text-4xl">{reviews}</h6>
            </div>
          </div>
          <div className="lg:text-start text-center">
            <button
              onClick={() => InstallAppBtn()}
              className="btn btn-active btn-success text-white"
              disabled={installed}
            >
              {installed ? `Installed` : `Install Now ${size}`}
            </button>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <hr className="my-8" />
      <div>
        <h6 className="font-semibold text-2xl text-[#001931]">Description</h6>
        <p className="text-xl text-[#627382] mt-6">{description}</p>
      </div>
    </div>
  );
};

export default AppDetils;
