import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import NavBar from "./NavBar";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState([]);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const response = axios.get("http://localhost:8000/cart").then((data) => {
      console.log("rcartsss", data.data.cart.cartItems);
      setCartItems(data.data.cart.cartItems);
      let totalSum = 0;
      data.data.cart.cartItems.map((item) => {
        totalSum += item.productQuantity * item.productId.price;
      });
      console.log("sum", totalSum);
      setGrandTotal(Math.round(totalSum));
    });
  }, [del]);

  return (
    <div className="w-full">
      <NavBar />
      <div class="h-screen bg-gray-300">
        <div class="py-12">
          <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div class="md:flex ">
              <div class="w-full p-4 px-5 py-5">
                <div class="md:grid md:grid-cols-3 gap-2 ">
                  <div class="col-span-2 p-5">
                    <h1 class="text-xl font-medium ">Shopping Cart</h1>
                    {cartItems.map((item) => {
                      return (
                        <CartItems
                          item={item}
                          setDel={setDel}
                        />
                      );
                    })}

                    <div class="flex justify-between items-center mt-6 pt-6 border-t">
                      <div class="flex items-center">
                        <i class="fa fa-arrow-left text-sm pr-2"></i>
                        <Link to="/home">
                          {" "}
                          <span class="text-md  font-medium text-blue-500">
                            Continue Shopping
                          </span>
                        </Link>
                      </div>

                      <div class="flex justify-center items-end">
                        <span class="text-sm font-medium text-gray-400 mr-1">
                          Grandtotal:
                        </span>
                        <span class="text-lg font-bold text-gray-800 ">
                          {" "}
                          ${grandTotal}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
