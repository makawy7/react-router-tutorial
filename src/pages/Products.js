import { Link } from "react-router-dom";

function Products() {
  return (
    <section className="section">
      <h2>Products</h2>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </section>
  );
}

export default Products;
