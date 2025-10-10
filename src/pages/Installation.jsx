import React, { useState } from "react";
import useAPI from "../Hooks/useAPI";
import InstallationCard from "../components/InstallationCard";
import { toast } from "react-toastify";

const Installation = () => {
  const { data } = useAPI();
  const [installedApp, setInstalledApp] = useState(() => {
    const existentList = JSON.parse(localStorage.getItem("InstalledApp")) || [];
    return existentList;
  });
  const installedAppData = data.filter((app) =>
    installedApp.includes(app.id.toString())
  );

  const UninstallAppBtn = (id) => {
    const updatedList = installedApp.filter((appId) => appId !== id.toString());
    setInstalledApp(updatedList);
    localStorage.setItem("InstalledApp", JSON.stringify(updatedList));
    toast("App is uninstalled from your device");
    console.log(updatedList);
  };
  console.log(installedAppData);

  return (
    <div className="my-20 max-w-[1440px] mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-5xl text-[#001931]">
          Your Installed Apps
        </h2>
        <p className="text-[#627382] mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="my-4 flex justify-between items-center">
        <h6 className="font-semibold text-2xl text-[#001931]">{`${installedAppData.length} Apps Found`}</h6>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Size ⬇️
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {installedAppData.length > 0 ? (
          installedAppData.map((SingleAppData) => (
            <InstallationCard
              UninstallAppBtn={UninstallAppBtn}
              SingleAppData={SingleAppData}
              key={SingleAppData.id}
            ></InstallationCard>
          ))
        ) : (
          <p className="col-span-full text-center text-blue-500 font-semibold text-6xl">
            No App installed
          </p>
        )}
      </div>
    </div>
  );
};

export default Installation;
