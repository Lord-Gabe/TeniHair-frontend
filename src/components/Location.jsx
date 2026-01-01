import location from "../assets/loc1.png"
export default function Location() {
  return (
    <section className="location-section">
          <div className="location-content">
            <h2>Our Location</h2>

            <p>
              <strong>Address:</strong><br />
              Suite 06 Safr Plaza, Block B, Rafi Close Kachia Road, Kaduna State, Nigeria
            </p>

            <p>
              <strong>Phone:</strong> +23480124002781
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:tayek62@gmail.com">tayek62@gmail.com</a>
            </p>
          </div>

          <div className="location-image">
            <img src={location} loading="lazy"/>
          </div>
        </section>
  );
}