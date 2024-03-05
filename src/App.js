import "./App.css";
import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import { AllProductsPage } from "./pages/AllProducts";
import { Navbar } from "./components/Navbar";
import { Profile } from "./pages/Profile";
import { WishListPage } from "./pages/WishList";
import { CartPage } from "./pages/Cart";
import { SideBar } from "./components/SideBar";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";
import { SingleProduct } from "./pages/SingleProduct";
import { Home } from "./pages/Home";
import { SingleCategory } from "./pages/SingleCategory";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<AllProductsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishList" element={<WishListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
