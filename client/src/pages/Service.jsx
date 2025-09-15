import { useAuth } from "../store/auth";
import Cleaner from "./Details/Cleaner";
import { NavLink } from "react-router-dom";
import "./Styles/Service.css";

export const Service = () => {
  const { isLoggedIn } = useAuth();

  return (
    <section className="services-section">
      {isLoggedIn ? (
        <NavLink to="/contact">
          <button className="service-btn contact-service-btn">Contact</button>
        </NavLink>
      ) : (
        <NavLink to="/login">
          <button className="service-btn contact-service-btn">Contact</button>
        </NavLink>
      )}

      <a href="https://wa.me/917888223517?text=Hi,Servax" target="_blank">
        <button className="service-btn whatsapp-service-btn">WhatsApp</button>
      </a>
      <div className="services-container">
        <h1 className="services-heading">Services</h1>
      </div>

      <div className="services-container services-grid services-three-cols">
        {/* 1. Cleaner card */}
        <div className="service-card">
          <NavLink to="/cleaner">
            <div className="service-card-image">
              <img
                src="./images/cleaning.png"
                alt="our services info"
                width="200"
              />
            </div>
          </NavLink>

          <div className="service-card-details">
            <div className="service-card-meta service-grid service-two-cols">
              <p>Servax-Services</p>
              <p>800-2000</p>
            </div>
            <h2 className="service-card-title">Cleaner</h2>
            <p className="service-card-description">Cleaner services...</p>
          </div>
        </div>

        {/* 2. electrician card */}

        <div className="service-card">
          <NavLink to="/electrician">
            <div className="service-card-image">
              <img
                src="./images/electrician.png"
                alt="our services info"
                width="200"
              />
            </div>
          </NavLink>

          <div className="service-card-details">
            <div className="service-card-meta service-grid service-two-cols">
              <p>Servax-Services</p>
              <p>400-800</p>
            </div>
            <h2 className="service-card-title">Electrician</h2>
            <p className="service-card-description">
              Electrician services. services...
            </p>
          </div>
        </div>

        {/* 3. plumber card */}

        <div className="service-card">
          <NavLink to="/plumbing">
            <div className="service-card-image">
              <img
                src="./images/plumbing.png"
                alt="our services info"
                width="200"
              />
            </div>
          </NavLink>

          <div className="service-card-details">
            <div className="service-card-meta service-grid service-two-cols">
              <p>Servax-Services</p>
              <p>500-900</p>
            </div>
            <h2 className="service-card-title">Plumbing </h2>
            <p className="service-card-description">
              Plumbing services. services...
            </p>
          </div>
        </div>

        {/* 4. carpentry card */}

        <div className="service-card">
          <NavLink to="/carpentry">
            <div className="service-card-image">
              <img
                src="./images/carpentry.png"
                alt="our services info"
                width="200"
              />
            </div>
          </NavLink>

          <div className="service-card-details">
            <div className="service-card-meta service-grid service-two-cols">
              <p>Servax-Services</p>
              <p>800-2000</p>
            </div>
            <h2 className="service-card-title">Carpentry.</h2>
            <p className="service-card-description">
              Carpentry services. services...
            </p>
          </div>
        </div>

        {/* 5. Ac repair  card */}

        <div className="service-card">
          <NavLink to="/acrepair">
            <div className="service-card-image">
              <img
                src="./images/ac-repair.png"
                alt="our services info"
                width="200"
              />
            </div>
          </NavLink>

          <div className="service-card-details">
            <div className="service-card-meta service-grid service-two-cols">
              <p>Servax-Services</p>
              <p>700-1200</p>
            </div>
            <h2 className="service-card-title">Ac-Repair</h2>
            <p className="service-card-description">
              Ac-Repair services. services...
            </p>
          </div>
        </div>

        {/* 6. pestcontrol card */}

        <div className="service-card">
          <NavLink to="/pestcontrol">
            <div className="service-card-image">
              <img
                src="./images/pest-control.png"
                alt="our services info"
                width="200"
              />
            </div>
          </NavLink>

          <div className="service-card-details">
            <div className="service-card-meta service-grid service-two-cols">
              <p>Servax-Services</p>
              <p>1000-1500</p>
            </div>
            <h2 className="service-card-title">Pest Control</h2>
            <p className="service-card-description">
              Pest Control services. services...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
