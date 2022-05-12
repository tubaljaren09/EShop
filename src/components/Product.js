import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
    return (
      <div className="skeleton">
        <Skeleton height={200} width={1540} />
        <Skeleton height={200} width={1540} />
        <Skeleton height={200} width={1540} />
        <Skeleton height={200} width={1540} />
      </div>
    );
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
        <button>
          <NavLink to="/cart">Go to cart</NavLink>
        </button>
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
