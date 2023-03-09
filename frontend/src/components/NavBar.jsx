import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(true);
  const handleCart = () => {
    navigate("/cart");
  };
  return (
    <div className="flex justify-between item-center h-16 max-w-[1240px] mx-auto px-4 font-Jost">
      <h1 className="font-bold text-3xl mt-2 ">Cart</h1>
      <ul className="hidden md:flex ">
        <li
          className="p-4"
          onClick={() => navigate("/home")}>
          Home
        </li>

        <li
          className="p-4"
          onClick={handleCart}>
          Cart
        </li>
      </ul>
      <div
        // onClick={handleNav}
        className="block md:hidden mt-4">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed z-10 left-0 top-0 w-[40%] border-r border-r-gray-300 bg-[#ffff] h-full ease-in-out duration-500"
            : "fixed left-[100%]"
        }>
        <h1 className="font-bold text-3xl w-full m-4">PropertyPilot</h1>
        <ul className="pt-12 uppercase">
          <li
            className="p-4 border-b border-gray-400"
            onClick={() => navigate("/home")}>
            Home
          </li>

          <li
            className="p-4 border-b border-gray-400"
            onClick={handleCart}>
            Chats
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
