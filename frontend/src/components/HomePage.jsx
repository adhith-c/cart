import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import NavBar from "./NavBar";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const response = axios
      .get("http://localhost:8000/cart/getProducts")
      .then((data) => {
        console.log("data", data.data.products);
        setProducts(data.data.products);
      });
  }, []);

  return (
    <div className="w-full">
      <NavBar />
      <div className="p-8">
        <div className="grid grid-cols-3 gap-3 ">
          {products?.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
