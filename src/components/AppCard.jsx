import React from 'react';
import { Star, Download } from "lucide-react";
import { Link } from 'react-router';

const AppCard = ({ SingleAppData }) => {
  const { image, title, downloads, ratingAvg, id } = SingleAppData;
  return (
    <Link className="block h-full" to={`/app-detils/${id}`}>
      <div className="p-4 h-full bg-white flex flex-col items-center justify-between gap-4 rounded-2xl shadow hover:shadow-2xl transform hover:-translate-y-2 duration-200 ease-linear cursor-pointer">
        <div className="max-h-72 max-w-72 mx-auto">
          <img className="mx-auto" src={image} alt={title} />
        </div>
        <h6 className="font-medium text-xl">{title}</h6>
        <div className="w-full flex justify-between items-center">
          <span className="flex items-center px-2.5 py-1.5 bg-[#F1F5E8] rounded-sm text-[#00D390] font-medium">
            <Download />
            {downloads}
          </span>
          <span className="flex items-center px-2.5 py-1.5 bg-[#FFF0E1] rounded-sm text-[#FF8811] font-medium">
            <Star />
            {ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;