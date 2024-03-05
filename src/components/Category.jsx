import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { CategoryItem } from "./CategoryItem";

export const Category = () => {
  const { category } = useContext(CategoryContext);

  return (
    <div className="w-full px-4">
      <h1 className="pt-10 font-extrabold text-5xl">Shop by category </h1>
      <div className="flex items-center justify-between pt-10">
        {category.map(({ categoryName, description, id, _id, image }) => (
          <CategoryItem
            key={id}
            categoryName={categoryName}
            description={description}
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

// className="flex flex-col border rounded"
