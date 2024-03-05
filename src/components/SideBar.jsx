import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CategoryContext } from "../context/CategoryContext";

export const SideBar = () => {
  const { data, setAllData } = useContext(ProductContext);
  // const [selectedCategories, setSelectedCategories] = useState([]);
  const {
    state: { categoryFilter },
    dispatch,
  } = useContext(CategoryContext);
  console.log(categoryFilter);

  const handleChange = (category) => {
    dispatch({ type: "CATEGORY_FILTER", payload: category });
    console.log({ categoryFilter });
    // const getMen = data.filter(({ categoryName }) =>
    //   categoryFilter.includes(categoryName)
    // );

    // console.log({ getMen });
    // setAllData(getMen);
    // setSelectedCategories((prev) => prev.push(category));
  };

  useEffect(() => {
    const getMen = data.filter(({ categoryName }) =>
      categoryFilter.includes(categoryName)
    );

    // console.log({ getMen });
    setAllData(getMen);
  }, [categoryFilter, data, setAllData]);

  // const handleWomensFashion = () => {
  //   const getWomen = data.filter(
  //     ({ categoryName }) => categoryName === "Women"
  //   );
  //   setAllData(getWomen);
  //   setSelectedCategories((prev) => prev.push("Women's Fashion"));
  // };

  // const handleKidsFashion = () => {
  //   const getKids = data.filter(({ categoryName }) => categoryName === "Kids");
  //   setAllData(getKids);
  //   setSelectedCategories((prev) => prev.push("Kid's Fashion"));
  // };

  // const handleBeauty = () => {
  //   const getBeauty = data.filter(
  //     ({ categoryName }) => categoryName === "Beauty"
  //   );
  //   setAllData(getBeauty);
  //   setSelectedCategories((prev) => prev.push("Beauty"));
  // };

  const categories = [
    "Men's Fashion",
    "Women's Fashion",
    "Kid's Fashion",
    "Beauty",
  ];

  return (
    <div className="sticky top-[80px] left-0">
      <div className="flex-col justify-end text-left border shadow w-60 pt-4 pb-4">
        <div className="flex p-4 justify-between gap-2">
          <h2 className="font-bold text-xl">FILTERS</h2>
          <span className="border rounded-3xl text-sm pt-1 pb-1 pr-2 pl-2 mb-2">
            Clear All
          </span>
        </div>

        <hr />

        <div>
          <h2 className="font-bold text-sm text-left pl-4 pt-4">CATEGORIES</h2>
        </div>

        <div className="flex flex-col gap-4 p-4">
          {categories.map((category, index) => (
            <div className="flex gap-2" key={index}>
              <input
                type="checkbox"
                id={category}
                name="category"
                value={category}
                onChange={() => handleChange(category)}
                checked={categoryFilter?.includes(category)}
              />
              <label for={category} className="text-sm">
                {" "}
                {category}
              </label>
            </div>
          ))}
        </div>

        <hr />

        <div>
          <h2 className="font-bold text-sm text-left pt-4 px-4">PRICE </h2>
        </div>

        <div className="price-range pt-4 pl-4">
          <span> 500 </span>
          <span className="pl-8"> 6500 </span>
          <span className="pl-9"> 20000 </span>
        </div>

        <div className="pl-4 pb-4">
          <input type="range" min="500" max="20000" className="w-48" />{" "}
        </div>

        <hr />

        <div className="font-bold text-sm text-left p-4">
          <h2> RATINGS </h2>
        </div>

        <div className="pb-1 pl-4">
          <input
            type="radio"
            id="4stars"
            name="rating"
            value="4 stars and above"
          />
          <label for="4stars"> 4 stars and above</label>
        </div>

        <div className="pb-1 pl-4">
          <input
            type="radio"
            id="3stars"
            name="rating"
            value="3 stars and above"
          />
          <label for="3stars"> 3 stars and above</label>
        </div>

        <div className="pb-1 pl-4">
          <input
            type="radio"
            id="2stars"
            name="rating"
            value="2 stars and above"
          />
          <label for="2stars"> 2 stars and above</label>
        </div>

        <div className="pb-4 pl-4">
          <input
            type="radio"
            id="1stars"
            name="rating"
            value="1 stars and above"
          />
          <label for="1stars"> 1 stars and above</label>
        </div>

        <hr />

        <div className="font-bold text-sm text-left p-4">
          <h2> SORT BY PRICE </h2>
        </div>
        <div className="py-1 pl-4">
          <input
            type="radio"
            id="lowtohigh"
            name="sorting"
            value="Low to High"
          />
          <label for="lowtohigh"> Low to High </label>
        </div>
        <div className="py-1 pl-4">
          <input
            type="radio"
            id="hightolow"
            name="sorting"
            value="Low to High"
          />
          <label for="hightolow"> High to Low </label>
        </div>
      </div>
    </div>
  );
};
