import { Analytics } from "../components/Analytics";
import "./Styles/About.css";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Welcome to Technical Hub</p>
              <h1>Why Choose Us?</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                doloremque eius libero, totam cumque sunt dolores. Ducimus
                ratione illum, officiis, voluptatibus aperiam, quos molestiae
                doloremque ab cumque sunt dolores. Ducimus ratione illum,
                officiis, voluptatibus aperiam, quos molestiae aut.
              </p>

              <div className="btn-group">
                <a href="/contact">
                  <button className="first-btn">connect now</button>
                </a>
                <a href="/service">
                  <button className="secondary-btn">learn more</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding together"
                width="400"
                height="400"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};