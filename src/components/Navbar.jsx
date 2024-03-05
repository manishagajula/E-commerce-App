import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import { BsPerson } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { categories } from "../backend/db/categories";

export const Navbar = () => {
  const { category, setCategory } = useContext(CartContext);

  const handlegetAllCategories = async () => {
    try {
      const response = await axios.get("/api/categories");
      console.log({ response });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handlegetAllCategories();
  }, []);

  const handlegetCategories = async (categoryId) => {
    console.log(categoryId);
    try {
      const response = await axios.get(`/api/categories/${categoryId}`);
      console.log({ response });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <nav className="flex sticky top-0 bg-white gap-28 p-2 shadow justify-start content-center z-10">
      {" "}
      <h1 className="pt-2 font-bold text-lg"> TRENDY CLOSET </h1>
      <div className="flex gap-9 font-bold content-center pt-2">
        {/* <NavLink
          to="/allProducts"
          onClick={() => handlegetCategories(category._id)}
        >
          Men
        </NavLink>
        <NavLink to="allProductss">Women</NavLink>
        <NavLink to="/allProducts">Kids</NavLink>
        <NavLink to="/allProducts">Beauty</NavLink> */}
        {categories.map((category) => (
          <NavLink
            to="/allProducts"
            key={category._id}
            onClick={() => handlegetCategories(category._id)}
          >
            {category.categoryName}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center bg-slate-100 w-max p-1 rounded-3xl">
        <span>
          <IoIosSearch />
        </span>
        <input
          type="text"
          name="search"
          placeholder="Search For Products"
          className=" text-sm  text-left font-normal  rounded-lg ml-2 bg-transparent w-72 p-1"
        />
      </div>
      <div>
        <div className="flex gap-x-20 justify-center ">
          <p>
            {" "}
            <BsPerson />
          </p>
          <p>
            {" "}
            <IoBagHandleOutline />{" "}
          </p>
          <p>
            {" "}
            <GoHeart />
          </p>
        </div>
        <div className="flex gap-10 font-bold pr-2">
          <NavLink to="/profile"> Profile </NavLink>
          <NavLink to="/wishList"> WishList </NavLink>
          <NavLink to="/cart"> Bag</NavLink>
        </div>
      </div>
    </nav>
  );
};
