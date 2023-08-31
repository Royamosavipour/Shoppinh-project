import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductsSection from "./Components/ProductsSection/ProductsSection";
import products from "./data/products";
import Toast from "./Components/Toast/Toast";
import Cart from "./Components/Card/Cart";
import productsContects from "./Contexts/ProductContext";

import "./App.css";

export default function App() {
  const [allproducts, setAllProducts] = useState(products);
  const [userCart, setUseCart] = useState([]);
  const [isShowToast, setisShowToast] = useState(false);
  const [isShowSidebar, setisShowSidebar] = useState(false);

  return (
    <div>
      <productsContects.Provider
        value={{
          allproducts,
          userCart,
          setUseCart,
          isShowSidebar,
          setisShowSidebar,
          isShowToast,
          setisShowToast,
        }}
      >
        <Navbar />
        <main className="pb-3">
          <div className="container">
            <h1 className="text-center mt-3"> All Products </h1>
            <ProductsSection/>
          </div>
        </main>
        <Toast />
        <Cart />
      </productsContects.Provider>
    </div>
  );
}
