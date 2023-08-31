import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./cartLayout.css";
import productsContects from "../../Contexts/ProductContext";

export default function Cart() {
  const contextData = useContext(productsContects);
  return (
    <div>
      <aside
        className={`${contextData.isShowSidebar ? "active" : ""} bag-aside`}
      >
        <h3 className="bag-title">
          <span className="brand-aside">
            <BsBag className="bsBag-aside" />
            Bag
          </span>
          <span>
            <AiOutlineClose
              className="close-asid-style"
              onClick={() => {
                contextData.setisShowSidebar(false);
              }}
            />
          </span>
        </h3>

        {contextData.userCart.map((products) => (
          <div className="row bag-wrapper mt-3" key={products.id}>
            <div className="col-12">
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img
                    src={products.img}
                    alt="ProductImage"
                    className="cart-img w-75"
                  />
                </div>
                
                <div className=" card-body d-flex justify-content-center flex-column align-item-center">
                  <p className="card-text"> {products.title} 
                  <span className="number style-span-number text-center">This Box Is: {products.count} item </span> </p>
                  <p className="price">{products.price} $</p>

                  <a href="#" className="btn btn-danger">
                    Buy
                  </a>
                  <a href="#" className="btn btn-outline-danger my-3">
                    More Informaition
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}
