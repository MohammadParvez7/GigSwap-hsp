import { Analytics } from "../components/Analytics";
import "./Styles/Home.css";
import { Testimonials } from "../components/Testimonials";
import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { isLoggedIn } = useAuth();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* Language buttons */}
              <div className="language-buttons">
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
                <button onClick={() => changeLanguage('mr')}>मराठी</button>
              </div>

              {/* Use the t function to get translated text */}
              <p>{t("home_p1")}</p>
              <h1>{t("home_h1")}</h1>
              <p>{t("home_p2")}</p>

              <div className="btn-group">
                {isLoggedIn ? (
                  <NavLink to="/contact">
                    <button className="first-btn">{t("book_now")}</button>
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    <button className="first-btn">{t("book_now")}</button>
                  </NavLink>
                )}
                <a href="/service">
                  <button className="secondary-btn">{t("services")}</button>
                </a>
              </div>
            </div>
            {/* ... other code (hero image) ... */}
          </div>
        </section>
        </main>
        {/* 2nd section */}
        <Analytics />

        {/* 3rd section */}
        <section className="section-hero2">
          <div className="container2 grid grid-two-cols">
            <div className="hero-image2">
              <img
                src="/images/h2.jpg"
                alt="coding together"
                width="300"
                height="300"
              />
            </div>
            <div className="hero-content2">
              <p>{t("help_p1")}</p>
              <h1>{t("help_h1")}</h1>
              <p>{t("help_p2")}</p>
              <div className="btn-group">
                {isLoggedIn ? (
                  <NavLink to="/contact">
                    <button className="first-btn">{t("book_now")}</button>
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    <button className="first-btn">{t("book_now")}</button>
                  </NavLink>
                )}
                <a href="/service">
                  <button className="secondary-btn">{t("services")}</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />
      </>
  );
};