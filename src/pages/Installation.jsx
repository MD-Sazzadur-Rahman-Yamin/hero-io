import React, { useState } from "react";
import useAPI from "../Hooks/useAPI";
import InstallationCard from "../components/InstallationCard";
import { toast } from "react-toastify";
import NoAppFound from "./NoAppFound";

const Installation = () => {
  const { data } = useAPI();
  const [sort, setSort] = useState("none");
  const [installedApp, setInstalledApp] = useState(() => {
    const existentList = JSON.parse(localStorage.getItem("InstalledApp")) || [];
    return existentList;
  });
  const installedAppData = data.filter((app) =>
    installedApp.includes(app.id.toString())
  );
  const sortedItems = () => {
    if (sort === "size-ascending") {
      return [...installedAppData].sort(
        (a, b) => a.downloadsInt - b.downloadsInt
      );
    } else if (sort === "size-descending") {
      return [...installedAppData].sort(
        (a, b) => b.downloadsInt - a.downloadsInt
      );
    } else {
      return installedAppData;
    }
  };
  console.log(sortedItems());
  const UninstallAppBtn = (id) => {
    const updatedList = installedApp.filter((appId) => appId !== id.toString());
    setInstalledApp(updatedList);
    localStorage.setItem("InstalledApp", JSON.stringify(updatedList));
    toast("App is uninstalled from your device");
  };
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
        <label className="form-control w-full max-w-3xs">
          <select
            className="select select-bordered"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Sort By Downloads</option>
            <option value="size-ascending">Low-High</option>
            <option value="size-descending">High-Low</option>
          </select>
        </label>
      </div>
      <div className="flex flex-col gap-4">
        {installedAppData.length > 0 ? (
          sortedItems().map((SingleAppData) => (
            <InstallationCard
              UninstallAppBtn={UninstallAppBtn}
              SingleAppData={SingleAppData}
              key={SingleAppData.id}
            ></InstallationCard>
          ))
        ) : (
          <NoAppFound></NoAppFound>
        )}
      </div>
    </div>
  );
};

export default Installation;
