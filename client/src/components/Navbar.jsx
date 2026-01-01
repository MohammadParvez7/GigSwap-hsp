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

  // Optional: wait until auth data loads
  // if (isLoading) {
  //   return null;
  // }

  return (
    <header>
      <div className="container navbar">
        {/* Logo */}
        <div className="logo-brand">
          <NavLink to="/">GigSwap</NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation */}
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

            {/* Book */}
            {isLoggedIn ? (
              <li>
                <NavLink to="/contact">Book</NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/login">Book</NavLink>
              </li>
            )}

            {/* Admin Panel */}
            {isLoggedIn && user?.isAdmin && (
              <li>
                <NavLink to="/admin/users">Admin Panel</NavLink>
              </li>
            )}

            {/* Worker Panel */}
            {isLoggedIn && user?.isWorker && (
              <li>
                <NavLink to="/worker/contacts">Worker Panel</NavLink>
              </li>
            )}

            {/* Auth Links */}
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
