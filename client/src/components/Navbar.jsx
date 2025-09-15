// Navbar.jsx
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const { isLoggedIn, user, isLoading } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleMenu = () => setSidebarOpen(!isSidebarOpen);

  // // Don't render the navbar until user data is loaded
  // if (isLoading) {
  //   return null; // or a loading spinner
  // }

  return (
    <header>
      <div className="container navbar">
        <div className="logo-brand">
          <NavLink to="/">Servax</NavLink>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav
          className={isSidebarOpen ? "active" : ""}
          onClick={() => setSidebarOpen(false)}
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/contact">Book</NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/login">Book</NavLink>
              </li>
            )}
            {isLoggedIn && user?.isAdmin && (
              <li>
                <NavLink to="/admin/users">Admin Panel</NavLink>
              </li>
            )}
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
