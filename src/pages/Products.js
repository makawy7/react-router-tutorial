import { Link } from "react-router-dom";
import products from "../data";
function Products() {
  return (
    <section className="section">
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <Link key={p.id} to={`/products/${p.id}`}>
            <h4>{p.name}</h4>
          </Link>
        ))}
      </ul>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </section>
  );
}

export default Products;
