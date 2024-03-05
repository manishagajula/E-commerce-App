import { createContext, useEffect, useReducer } from "react";
import { useState } from "react";
import axios from "axios";
import { filterReducer } from "../reducer/FilterReducer";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  const initialState = { categoryFilter: [] };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const getCategoryHandler = async () => {
    try {
      const response = await axios.get("/api/categories");
      console.log({ response });
      if (response.status === 200) {
        setCategory(response.data.categories);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCategoryHandler();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
        state,
        dispatch,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
