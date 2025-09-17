import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // <-- 1. Import hook

export const Navbar = () => {
  const { isLoggedIn, user, isLoading } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleMenu = () => setSidebarOpen(!isSidebarOpen);

  const { t, i18n } = useTranslation(); // <-- 2. Initialize hook

  // 3. Language changing function
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Don't render the navbar until user data is loaded
  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <header>
      <div className="container navbar">
        <div className="logo-brand">
          <NavLink to="/">GigSwap</NavLink>
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
              <NavLink to="/">{t("nav_home")}</NavLink>
            </li>
            <li>
              <NavLink to="/about">{t("nav_about")}</NavLink>
            </li>
            <li>
              <NavLink to="/service">{t("nav_services")}</NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/contact">{t("nav_book")}</NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/login">{t("nav_book")}</NavLink>
              </li>
            )}
            {isLoggedIn && user?.isAdmin && (
              <li>
                <NavLink to="/admin/users">{t("nav_admin")}</NavLink>
              </li>
            )}
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout">{t("nav_logout")}</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register">{t("nav_register")}</NavLink>
                </li>
                <li>
                  <NavLink to="/login">{t("nav_login")}</NavLink>
                </li>
              </>
            )}
            {/* 4. Language Buttons */}
            <li>
              <button onClick={() => changeLanguage('en')}>EN</button>
              <button onClick={() => changeLanguage('hi')}>HI</button>
              <button onClick={() => changeLanguage('mr')}>MR</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};