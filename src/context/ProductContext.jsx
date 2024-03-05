import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [alldata, setAllData] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      if (response.status === 200) {
        setData(response.data.products);
        setAllData(response.data.products);
      }
      console.log({ response });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        data,
        setData,
        setAllData,
        alldata,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
