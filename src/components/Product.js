import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const ShowProduct = () => {
    return (
      <div className="product-cards">
        <img src={product.image} width="400px" height="400px" />
        <h2>{product.category}</h2>
        <h3>{product.title}</h3>
        <p>Rating {product.rating && product.rating.rate}</p>
        <h1>${product.price}</h1>
        <p>{product.description}</p>
        <button>Add to cart</button>
      </div>
    );
  };

  return (
    <div className="product-main">
      <div className="product-container">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
};

export default Product;
