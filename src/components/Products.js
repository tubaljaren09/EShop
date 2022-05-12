import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="skeleton">
        <Skeleton height={200} width={1500} />
        <Skeleton height={200} width={1500} />
        <Skeleton height={200} width={1500} />
        <Skeleton height={200} width={1500} />
      </div>
    );
  };

  const filterProduct = (category) => {
    const updatedList = data.filter((x) => x.category === category);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <div className="products">
        <div className="buttons">
          <button onClick={() => setFilter(data)}>All</button>
          <button onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
          </button>
          <button onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button onClick={() => filterProduct("electronics")}>
            Electronics
          </button>
        </div>
        <div className="cards-container">
          {filter.map((product) => {
            return (
              <div key={product.id} className="product-cards">
                <img src={product.image} width="250px" height="250px" />
                <h4>{product.title.substring(0, 12)}</h4>
                <h4>${product.price}</h4>
                <br />
                <button>
                  <NavLink to={`/products/${product.id}`}>Buy now</NavLink>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="products-main">
      <div className="products-container">
        <h1>LATEST PRODUCTS</h1>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
