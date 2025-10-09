import React from "react";
import { Link } from "react-router";
import AppCard from "./AppCard";

const TrandingApps = ({ trandingAppData }) => {
  return (
    <div className="my-20 max-w-[1440px] mx-auto">
      <div className="text-center">
        <h3 className="font-bold text-5xl text-[#001931]">Trending Apps</h3>
        <p className="text-[#627382] mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {trandingAppData.map((trandingSingleAppData) => (
            <AppCard
              trandingSingleAppData={trandingSingleAppData}
              key={trandingSingleAppData.id}
            ></AppCard>
          ))}
        </div>
        <Link to="apps">
          <button className="btn btn-wide bg-linear-65 from-[#632EE3] to-[#9F62F2] text-white">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrandingApps;
