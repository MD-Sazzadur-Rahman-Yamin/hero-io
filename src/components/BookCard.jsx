import React from 'react';
import { Star, Download } from "lucide-react";

const BookCard = ({ trandingSingleAppData }) => {
    const { image, title, downloads, ratingAvg } = trandingSingleAppData;
    console.log(trandingSingleAppData);
  return (
    <div className="p-4 bg-white flex flex-col justify-center gap-4 rounded-2xl shadow hover:shadow-2xl transform hover:-translate-y-2 duration-200 ease-linear cursor-pointer">
      <div className="max-h-72 max-w-72 mx-auto">
        <img className="mx-auto" src={image} alt={title} />
      </div>
      <h6 className="font-medium text-xl">{title}</h6>
      <div className="flex justify-between items-center">
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
  );
};

export default BookCard;