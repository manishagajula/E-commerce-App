import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../context/CategoryContext";

export const CategoryItem = ({ categoryName, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { category, dispatch } = useContext(CategoryContext);
  const navigate = useNavigate();

  const handleFilterByCategory = (getCategoryName) => {
    dispatch({ type: "CATEGORY_FILTER", payload: getCategoryName });
    navigate(`/allProducts`);
  };

  return (
    <div
      className="flex cursor-pointer flex-col items-center justify-center border rounded w-80 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="my-2">{categoryName}</p>
      {/* <div className="flex items-center"> */}
      <div>
        <img
          src={image}
          alt={"category_image"}
          className="h-96 w-full relative"
        />
      </div>
      {/* </div> */}
      <div className="absolute bg-slate-200 opacity-75 w-48">
        <p
          className={`${
            isHovered ? "block" : "hidden"
          } text-balance line-clamp-3 my-3 z-10`}
        >
          {description}
        </p>
        {/* <div> */}

        {/* </div> */}
      </div>
      <button
        onClick={() => handleFilterByCategory(categoryName)}
        className="border rounded-full pt-2 pb-2 pr-4 pl-4 bg-sky-400"
      >
        {" "}
        Shop Now{" "}
      </button>
    </div>
  );
};
