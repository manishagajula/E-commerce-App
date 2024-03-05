import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export const CartPage = () => {
  const { token } = useContext(AuthContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: token },
      });
      console.log({ response });
      setCartItems(response.data.cart);
    } catch (e) {
      console.error(e);
    }
  };

  const handlegetCartItems = async () => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: { authorization: token },
      });
      console.log({ response });
      setCartItems(response.data.cart);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handlegetCartItems();
  }, []);

  const handleupdateCartItemHandler = async (productId, actionType) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: actionType,
          },
        },
        {
          headers: { authorization: token },
        }
      );
      console.log({ response });
      setCartItems(response.data.cart);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1>Shopping Bag</h1>
        <p> Total Items: {cartItems.length}</p>
      </div>
      <div>
        {cartItems.map((product) => (
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
            <button onClick={() => handleRemoveFromCart(product._id)}>
              {" "}
              Remove from Cart
            </button>

            <button
              onClick={() =>
                handleupdateCartItemHandler(product._id, "increment")
              }
            >
              {" "}
              +
            </button>
            <span> {product.qty} </span>
            <button
              onClick={() =>
                product.qty >= 1 &&
                handleupdateCartItemHandler(product._id, "decrement")
              }
            >
              {" "}
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
