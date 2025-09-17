import { useState, useEffect } from "react";
import "./Styles/Contact.css";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
  address: "",
  date: "",
  time: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
        address: "",
        date: "",
        time: "",
      });
      setUserData(false);
    }
  }, [userData, user]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://gigswap-hsp-server.onrender.com/api/form/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success(t("contact_success_toast"));
      } else {
        toast.error(t("contact_failure_toast"));
      }
    } catch (error) {
      toast.error(t("contact_error_toast"));
      console.log("Error during form submission:", error);
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">{t("contact_heading")}</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>

          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">{t("contact_username_label")}</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">{t("contact_email_label")}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">{t("contact_services_label")}</label>
                <select
                  name="message"
                  id="select"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                >
                  <option>{t("contact_select_option")}</option>
                  <option>{t("service_title_electrician")}</option>
                  <option>{t("service_title_plumbing")}</option>
                  <option>{t("service_title_acrepair")}</option>
                  <option>{t("service_title_cleaner")}</option>
                  <option>{t("service_title_carpentry")}</option>
                  <option>{t("service_title_pestcontrol")}</option>
                </select>
              </div>

              <div>
                <label htmlFor="date">{t("contact_date_label")}</label>
                <input
                  type="date"
                  name="date"
                  value={contact.date}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="time">{t("contact_time_label")}</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={contact.time}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="address">{t("contact_address_label")}</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="off"
                  value={contact.address}
                  onChange={handleInput}
                  required
                />
              </div>

              <div></div>
              <div>
                <button type="submit">{t("contact_book_button")}</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.5624118703483!2d77.3097348290443!3d19.153504666056282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d640295f68b3%3A0x52ce2e1cbead222f!2sVazirabad%2C%20Nanded%2C%20Nanded-Waghala%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1752240517734!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};