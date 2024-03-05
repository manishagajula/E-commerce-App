import { ProductsData } from "../components/Products";
import { SideBar } from "../components/SideBar";

export const AllProductsPage = () => {
  return (
    <div>
      <h1>All Products Page</h1>
      <div className="flex flex-row-reverse justify-center">
        <SideBar />

        <ProductsData />
      </div>
    </div>
  );
};
