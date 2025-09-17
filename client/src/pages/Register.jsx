import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "./Styles/Register.css";
import { useTranslation } from "react-i18next";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const { t } = useTranslation();

  const URL = "https://gigswap-hsp-server.onrender.com/api/auth/register";

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success(t("register_success_toast"));
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/h4.jpg"
                  alt="a nurse with a cute look"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">{t("register_form_heading")}</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">{t("register_username_label")}</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder={t("register_username_placeholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">{t("register_email_label")}</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder={t("register_email_placeholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">{t("register_phone_label")}</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">{t("register_password_label")}</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder={t("register_password_placeholder")}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    {t("register_button")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};