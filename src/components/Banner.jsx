import React from "react";
import heroPng from "../assets/hero.png";
import playStore from "../assets/playStore.png";
import appStore from "../assets/AppStore.png";

const Banner = () => {
  return (
    <div className="max-w-[1440px] mx-auto mt-20">
      <div className="text-center">
        <h1 className="font-bold text-7xl">
          We Build
          <br />
          <span className="text-transparent bg-clip-text bg-linear-65 from-[#632EE3] to-[#9F62F2]">
            Productive
          </span>
          Apps
        </h1>
        <p className="text-[#627382] mt-4">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="my-10 flex justify-center items-center gap-4">
          <a href="https://play.google.com/store/games?hl=en" target="_blank">
            <div className="border-[#D2D2D2] rounded-2xl border-2 px-6 py-3">
              <div className="flex items-center justify-center gap-2.5">
                <img className="max-w-8" src={playStore} alt="" />
                <h6 className="text-xl font-semibold">Google Play</h6>
              </div>
            </div>
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <div className="border-[#D2D2D2] rounded-2xl border-2 px-6 py-3">
              <div className="flex items-center justify-center gap-2.5">
                <img className="max-w-8" src={appStore} alt="" />
                <h6 className="text-xl font-semibold">App Store</h6>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={heroPng} alt="" />
      </div>
    </div>
  );
};

export default Banner;
