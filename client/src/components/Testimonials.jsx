import "./Testimonials.css";
export const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-heading">What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Servax made finding reliable help so easy! Quick, friendly, and efficient service every time."</p>
            <div className="testimonial-client">
              <img src="/images/women.jpg" alt="Ayesha Khan" />
              <h4>- Ayesha Khan</h4>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"Highly recommend Servax! The cleaner they sent was top-notch, and the process was seamless."</p>
            <div className="testimonial-client">
              <img src="/images/men.jpg" alt="Rohit Mehra" />
              <h4>- Rohit Mehra</h4>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"I booked a plumber through Servax and was blown away by the professionalism and speed."</p>
            <div className="testimonial-client">
              <img src="/images/men.jpg" alt="Neha Patel" />
              <h4>- Neha Patel</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
