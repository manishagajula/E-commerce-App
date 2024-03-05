import { useContext } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

export const ProductsData = () => {
  // const [data, setData] = useState([]);
  const { data, alldata } = useContext(ProductContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = async (getProduct) => {
    // dispatch({ type: "ADD_TO_CART", payload: getProduct });
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: getProduct },
        { headers: { authorization: token } }
      );
      console.log({ response });
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddToWishList = async (getProduct) => {
    // dispatch({ type: "ADD_TO_CART", payload: getProduct });
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: getProduct },
        { headers: { authorization: token } }
      );
      console.log({ response });
    } catch (e) {
      console.error(e);
    }
  };

  // const handleShowSingleProductOnClick = () => {
  //  );
  // };

  return (
    <div>
      {" "}
      {/* <h1>All products</h1> */}
      <p className="text-2xl font-medium text-left pl-4 pt-4">
        {" "}
        TRENDY CLOSET- {data.length} ITEMS
      </p>
      <div className="grid grid-cols-3 gap-2 ml-6 mt-10">
        {alldata?.map((product) => (
          <div
            key={product.id}
            className="relative"
            onClick={() => navigate(`/singleProduct/${product._id}`)}
          >
            <img
              className="object-fill min-h-min"
              src={product.image}
              alt={"productImage"}
              width="360px"
              height="480px"
            />
            <div className="absolute bottom-32 left-3 bg-gray-50 opacity-50">
              <div className="flex justify-center items-center">
                <FaStar /> {product.rating} | <span> {product.reviews}</span>
              </div>
            </div>

            <div className="absolute top-1 right-2 text-xl">
              <button onClick={() => handleAddToWishList(product)}>
                {" "}
                <GoHeart />{" "}
              </button>
            </div>

            <div className="flex flex-col items-start pl-4 gap-1">
              <p className="pt-2">{product.title} </p>

              <p>
                Rs.{product.discounted_price}{" "}
                <span style={{ textDecoration: "line-through" }}>
                  Rs.{product.original_price}
                </span>
              </p>
            </div>
            <div>
              <button
                className="text-center border rounded-lg flex items-center justify-center pl-28 pr-28 m-4"
                onClick={() => handleAddToCart(product)}
              >
                {" "}
                <span>
                  <IoBagHandleOutline />{" "}
                </span>{" "}
                Add to Cart
              </button>
            </div>
            {/* <p>{product.categoryName} </p>
            <p>{product.deliveryTime}</p>
            <p>{product.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
