import { Download, Star } from 'lucide-react';
import React from 'react';

const InstallationCard = ({SingleAppData}) => {
     const { image, title, downloads, ratingAvg, size } = SingleAppData;
  return (
    <div className="flex justify-between items-center bg-white p-4 gap-4">
      <div className="max-h-20 max-w-20 ">
        <img className="rounded-2xl" src={image} alt={title} />
      </div>
      <div className="flex flex-col justify-between flex-1 ">
        <h3 className="text-[#001931] text-xl font-medium">{title}</h3>
        <div className="flex gap-4 items-center ">
          <span className="flex items-center gap-1 font-medium text-[#00D390]">
            <Download />
            {downloads}
          </span>
          <span className="flex items-center gap-1 font-medium text-[#FF8811]">
            <Star />
            {ratingAvg}
          </span>
          <span className="text-[#627382]">{size}</span>
        </div>
      </div>
      <div>
        <button className="btn btn-active btn-success text-white">Uninstall</button>
      </div>
    </div>
  );
};

export default InstallationCard;