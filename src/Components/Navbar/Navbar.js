import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import "./navLayout.css";
import productsContects from "../../Contexts/ProductContext";

export default function Navbar() {
  const contextDta=useContext(productsContects)

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center align-items-center">
        <div class="container-fluid mx-4">
          <a class="navbar-brand mb-2">Creat By Roya Mousavipour</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>

          <div className="bag-box d-flex">
            <a href="#" className="bag">
              <BsBag className="styl-Icon" onClick={()=>{
                contextDta.setisShowSidebar(true)
              }} />
              <span className="bag-product-conter mx-3">0</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
