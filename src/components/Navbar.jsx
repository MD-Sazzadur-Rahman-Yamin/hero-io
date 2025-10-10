import React from "react";
import loge from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { Github } from "lucide-react";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">
        <li className="btn btn-ghost">Home</li>
      </NavLink>
      <NavLink to="apps">
        <li className="btn btn-ghost">App</li>
      </NavLink>
      <NavLink to="installation">
        <li className="btn btn-ghost">Installation</li>
      </NavLink>
    </>
  );
  return (
    <section className="bg-white">
      <div className="bg-base-100 shadow-sm">
        <div className="navbar max-w-[1440px] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
              <span>
                <img className="w-6" src={loge} alt="logo" />
              </span>
              <span>HERO.IO</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <a
              href="https://github.com/MD-Sazzadur-Rahman-Yamin/hero-io"
              target="_blank"
              className="btn bg-linear-65 from-[#632EE3] to-[#9F62F2] text-white"
            >
              <Github />
              <span>Contribution</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
