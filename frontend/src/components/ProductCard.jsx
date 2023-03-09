import axios from "axios";
import React from "react";

const ProductCard = ({ product }) => {
  const addToCart = (productId) => {
    const response = axios
      .post("http://localhost:8000/cart/addtocart", { productId })
      .then((response) => {
        console.log("resp", response);
      });
  };
  return (
    <div className="w-full">
      <div class="flex flex-col justify-center w-[350px] items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[420px]">
        <a href="#">
          <img
            class="rounded-t-lg  h-60 w-60 p-2 mx-1 "
            src={product.image}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.price}
          </p>
          <div className="d-flex ">
            <button
              type="button"
              className="b-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => addToCart(product._id)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
