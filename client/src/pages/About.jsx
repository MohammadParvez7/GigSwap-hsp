import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import "./Styles/About.css";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <section className="about-hero-section">
          <div className="about-container about-grid about-two-cols">
            <div className="about-hero-content">
              <h1>{t("about_heading")}</h1>
              <p>{t("about_expertise")}</p>
              <p>{t("about_customization")}</p>
              <p>{t("about_customer_centric")}</p>
              <p>{t("about_affordability")}</p>
              <p>{t("about_reliability")}</p>
              <div className="about-btn-group">
                <NavLink to="/contact">
                  <button className="about-btn">{t("about_btn_connect")}</button>
                </NavLink>
                <NavLink to="/service">
                  <button className="about-btn-secondary">{t("about_btn_learn")}</button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  );
};