import products from "../data";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleProduct() {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  useEffect(() => {
    const product = products.find((p) => p.id === productId);
    setProduct(product);
    setLoading(false);
  }, [productId]);

  return (
    <>
      {loading || (
        <section className="section">
          <img src={product.image} alt={product.name} />
          <h1>{product.name}</h1>
          <Link to="/products" className="btn">
            Back to products
          </Link>
        </section>
      )}
    </>
  );
}

export default SingleProduct;
