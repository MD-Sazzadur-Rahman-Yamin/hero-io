import React, { useState } from "react";
import useAPI from "../Hooks/useAPI";
import AppCard from "../components/AppCard";

const Apps = () => {
  const { data } = useAPI();
  const [search, setSearch] = useState('');
  const filteredSearch = search.trim().toLocaleLowerCase();
  const searchedApp = filteredSearch
    ? data.filter((app) =>
        app.title.toLocaleLowerCase().includes(filteredSearch)
      )
    : data;
  console.log(searchedApp);

  return (
    <div className="my-20 max-w-[1440px] mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-5xl text-[#001931]">
          Our All Applications
        </h2>
        <p className="text-[#627382] mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex gap-4 flex-col-reverse sm:flex-row justify-between items-center mt-10">
        <h4 className="font-semibold text-2xl">{`(${searchedApp.length}) Apps Found`}</h4>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {searchedApp.length > 0 ? (
          searchedApp.map((SingleAppData) => (
            <AppCard
              SingleAppData={SingleAppData}
              key={SingleAppData.id}
            ></AppCard>
          ))
        ) : (
          <p className="col-span-full text-center text-blue-500 font-semibold text-6xl">
            No App Found
          </p>
        )}
      </div>
    </div>
  );
};

export default Apps;
