import React from 'react';

const States = () => {
    return (
      <div className="p-20 bg-linear-65 from-[#632EE3] to-[#9F62F2] text-white">
        <h4 className="font-bold text-5xl text-center mb-10">
          Trusted by Millions, Built for You
        </h4>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-6">
          <div className="flex flex-col justify-center items-center gap-4">
            <p>Total Downloads</p>
            <h6 className="font-extrabold text-6xl">29.6M</h6>
            <p>21% more than last month</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p>Total Reviews</p>
            <h6 className="font-extrabold text-6xl">906K</h6>
            <p>46% more than last month</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p>Active Apps</p>
            <h6 className="font-extrabold text-6xl">132+</h6>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    );
};

export default States;