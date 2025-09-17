import { useAuth } from "../store/auth";
import "./Styles/Service.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Service = () => {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();

  return (
    <section className="services-section">
      {isLoggedIn ? (
        <NavLink to="/contact">
          <button className="service-btn contact-service-btn">{t("service_btn_contact")}</button>
        </NavLink>
      ) : (
        <NavLink to="/login">
          <button className="service-btn contact-service-btn">{t("service_btn_contact")}</button>
        </NavLink>
      )}

      <a href="https://wa.me/919960513126?text=Hi,GigSwap" target="_blank">
        <button className="service-btn whatsapp-service-btn">{t("service_btn_whatsapp")}</button>
      </a>
      <div className="services-container">
        <h1 className="services-heading">{t("services_heading")}</h1>
      </div>

      <div className="services-container services-grid services-three-cols">
        <div className="service-card">
          <NavLink to="/cleaner">
            <div className="service-card-image">
              <img src="./images/cleaning.png" alt="our services info" width="200" />
            </div>
          </NavLink>
          <div className="service-card-details">
            <div className="service-card-meta service-grid service-two-cols">
              <p>GigSwap-{t("service_card_label")}</p>
              <p>800-2000</p>
            </div>
            <h2 className="service-card-title">{t("service_title_cleaner")}</h2>
            <p className="service-card-description">{t("service_desc_cleaner")}</p>
          </div>
        </div>

        <div className="service-card">
          <NavLink to="/electrician">
            <div className="service-card-image">
              <img src="./images/electrician.png" alt="our services info" width="200" />
            </div>
          </NavLink>
          <div className="service-card-details">
            <div className="service-card-meta service-grid service-two-cols">
              <p>GigSwap-{t("service_card_label")}</p>
              <p>400-800</p>
            </div>
            <h2 className="service-card-title">{t("service_title_electrician")}</h2>
            <p className="service-card-description">{t("service_desc_electrician")}</p>
          </div>
        </div>

        <div className="service-card">
          <NavLink to="/plumbing">
            <div className="service-card-image">
              <img src="./images/plumbing.png" alt="our services info" width="200" />
            </div>
          </NavLink>
          <div className="service-card-details">
            <div className="service-card-meta service-grid service-two-cols">
              <p>GigSwap-{t("service_card_label")}</p>
              <p>500-900</p>
            </div>
            <h2 className="service-card-title">{t("service_title_plumbing")}</h2>
            <p className="service-card-description">{t("service_desc_plumbing")}</p>
          </div>
        </div>

        <div className="service-card">
          <NavLink to="/carpentry">
            <div className="service-card-image">
              <img src="./images/carpentry.png" alt="our services info" width="200" />
            </div>
          </NavLink>
          <div className="service-card-details">
            <div className="service-card-meta service-grid service-two-cols">
              <p>GigSwap-{t("service_card_label")}</p>
              <p>800-2000</p>
            </div>
            <h2 className="service-card-title">{t("service_title_carpentry")}</h2>
            <p className="service-card-description">{t("service_desc_carpentry")}</p>
          </div>
        </div>

        <div className="service-card">
          <NavLink to="/acrepair">
            <div className="service-card-image">
              <img src="./images/ac-repair.png" alt="our services info" width="200" />
            </div>
          </NavLink>
          <div className="service-card-details">
            <div className="service-card-meta service-grid service-two-cols">
              <p>GigSwap-{t("service_card_label")}</p>
              <p>700-1200</p>
            </div>
            <h2 className="service-card-title">{t("service_title_acrepair")}</h2>
            <p className="service-card-description">{t("service_desc_acrepair")}</p>
          </div>
        </div>

        <div className="service-card">
          <NavLink to="/pestcontrol">
            <div className="service-card-image">
              <img src="./images/pest-control.png" alt="our services info" width="200" />
            </div>
          </NavLink>
          <div className="service-card-details">
            <div className="service-card-meta service-grid service-two-cols">
              <p>GigSwap-{t("service_card_label")}</p>
              <p>1000-1500</p>
            </div>
            <h2 className="service-card-title">{t("service_title_pestcontrol")}</h2>
            <p className="service-card-description">{t("service_desc_pestcontrol")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};