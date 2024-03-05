// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export const SingleCategory = () => {
//   const [getSingleCategoryInfo, setSingleCategoryInfo] = useState({});
//   const { id } = useParams();

//   const getSingleCategoryById = async (id) => {
//     try {
//       const response = await axios.get(`/api/categories/${id}`);
//       console.log({ response });
//       if (response.status === 200) {
//         setSingleCategoryInfo(response.data.category);
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   useEffect(() => {
//     getSingleCategoryById();
//   }, []);

//   return (
//     <div>
//       <h1> hello</h1>
//     </div>
//   );
// };
