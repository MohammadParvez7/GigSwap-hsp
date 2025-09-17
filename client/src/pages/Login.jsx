import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Styles/Login.css";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const { t } = useTranslation();

  const URL = "https://gigswap-hsp-server.onrender.com/api/auth/login";

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
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
        setUser({ email: "", password: "" });
        toast.success(t("login_success_toast"));
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.log("invalid credential");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container2 grid2 grid-two-cols2">
              <div className="login-form">
                <h1 className="main-heading mb-3">{t("login_heading")}</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">{t("login_email_label")}</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder={t("login_email_placeholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">{t("login_password_label")}</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder={t("login_password_placeholder")}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    {t("login_button")}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <p className="register-link">
            {t("login_no_account_text")}
            <Link to="/register" className="link">
              {t("login_register_here_link")}
            </Link>
          </p>
        </main>
      </section>
    </>
  );
};