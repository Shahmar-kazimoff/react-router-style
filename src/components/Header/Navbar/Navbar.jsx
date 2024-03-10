import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import navbar from "./Navbar.module.css"

const Layout = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed right-0 left-0 flex justify-between items-center px-8 py-7">
      <div>
        <NavLink className="text-[30px] font-bold" to="/">Justice<span className="text-orange-500">.</span></NavLink>
      </div>

      <div className="lg:hidden relative z-[999]">
        <button onClick={toggleMobileMenu} className="text-3xl focus:outline-none">
          ☰
        </button>
      </div>

      <nav className="hidden lg:flex">
        <ul className={navbar.navbarStyle} >
          <li className="hover:text-black">
            <NavLink style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
              to="/">Home</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
              to="/practice">Practice Areas</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
              to="/services">Services</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
              to="/attorneys">Attorneys</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
              to="/about">About</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
              to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>

      <div className={`lg:hidden fixed top-0 py-20 px-10 right-0 w-80 h-[100%] bg-white ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        <ul className="flex flex-col font-medium text-md gap-4 text-[#747576]">
          <li className="hover:text-black">
            <NavLink style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
              to="/">Home</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
              to="/practice">Practice Areas</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
              to="/services">Services</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
              to="/attorneys">Attorneys</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
              to="/about">About</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
              to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
