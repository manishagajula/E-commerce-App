import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { GoHeartFill } from "react-icons/go";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export const WishListPage = () => {
  const { token } = useContext(AuthContext);
  const { wishListItems, setWishListItems } = useContext(CartContext);

  //   const handleRemoveFromWishList = (productId) => {
  //     // dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  //   };

  const handleRemoveFromWishList = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: token },
      });
      console.log({ response });
      setWishListItems(response.data.wishlist);
    } catch (e) {
      console.error(e);
    }
  };

  const handlegetWishListItems = async () => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: { authorization: token },
      });
      console.log({ response });
      setWishListItems(response.data.wishlist);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handlegetWishListItems();
  }, []);

  return (
    <div>
      <div>
        <h1>WishList Page </h1>
        <p> Total Items: {wishListItems.length}</p>
      </div>
      <div>
        {wishListItems.map((product) => (
          <div key={product.id}>
            <div>
              <img
                className="h-40 w-1/2 object-contain "
                src={product.image}
                alt={"productImage"}
              />
            </div>
            <p>{product.title}</p>
            <p>Rs.{product.original_price}</p>
            <p>{product.description}</p>
            <p>{product.deliveryTime}</p>
            <button onClick={() => handleRemoveFromWishList(product._id)}>
              {" "}
              <GoHeartFill />{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
