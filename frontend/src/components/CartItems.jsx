import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const CartItems = ({ item, setDel }) => {
  const [count, setCount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    setSubTotal(Math.round(item.productQuantity * item.productId.price));
    setCount(item.productQuantity);
  }, []);

  async function incrementCount(productId) {
    setCount((prev) => prev + 1);
    setSubTotal((prev) => Math.round(prev + item.productId.price));
    await axios
      .post("http://localhost:8000/cart/incQuantity", { productId })
      .then((response) => {
        console.log("inc", response);
      });
  }
  async function decrementCount(productId) {
    setCount((prev) => prev - 1);
    setSubTotal((prev) => Math.round(prev - item.productId.price));
    await axios
      .post("http://localhost:8000/cart/decQuantity", { productId })
      .then((response) => {
        console.log("inc", response);
      });
  }
  async function deleteItem(productId) {
    console.log(productId);
    await axios
      .post("http://localhost:8000/cart/delfromcart", { productId })
      .then((response) => {
        console.log("del", response);
        setDel((prev) => !prev);
      });
  }
  return (
    <div class="flex justify-between items-center mt-6 pt-6">
      <div class="flex  items-center">
        <img
          src={item.productId.image}
          width="60"
          class="rounded-full "
        />

        <div class="flex flex-col ml-3">
          <span class="md:text-md font-medium">{item.productId.name}</span>
          <span class="md:text-md font-medium">${item.productId.price}</span>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <div class="pr-8 flex ">
          <span
            class="font-semibold cursor-pointer"
            onClick={() => decrementCount(item.productId._id)}>
            -
          </span>
          <input
            type="text"
            class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
            value={count}
          />
          <span
            class="font-semibold cursor-pointer"
            onClick={() => incrementCount(item.productId._id)}>
            +
          </span>
        </div>

        <div class="pr-8 ">
          <span class="text-xs font-medium">${subTotal}</span>
        </div>
        <div>
          <MdDelete onClick={() => deleteItem(item.productId._id)} />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
