import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const [getsingleProduct, setgetSingleProduct] = useState({});
  const { id } = useParams();

  const getSingleProductById = async (id) => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      console.log({ response });
      if (response.status === 200) {
        setgetSingleProduct(response.data.product);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getSingleProductById(id);
  }, []);

  //   const getProduct = data.find((product) => product.id === id);

  return (
    <div>
      <h1> Single Product Page </h1>
      <img
        src={getsingleProduct.image}
        alt={"singleproduct_image"}
        className="h-48 w-48"
      />
      <div>{getsingleProduct?.name}</div>
      <div>{getsingleProduct?.description}</div>
      <p>{getsingleProduct.categoryName} </p>
      <p>{getsingleProduct.deliveryTime}</p>
    </div>
  );
};
