import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section">
      <h2>404</h2>
      <p>Page not found!</p>
      <Link to="/" className="btn">
        Back home
      </Link>
    </section>
  );
}

export default NotFound;
