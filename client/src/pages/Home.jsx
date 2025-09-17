import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Analytics } from "../components/Analytics"; // Can be uncommented if needed
import { Testimonials } from "../components/Testimonials"; // Can be uncommented if needed
import "./Styles/Home.css";

export const Home = () => {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
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
            {/* The hero image div is removed */}
          </div>
        </section>
      </main>

      {/* Analytics and Testimonials sections are optional, can be re-added if needed */}
      {/* <Analytics />
      <Testimonials /> */}
    </>
  );
};