import React from "react";
import { useContext } from "react";
import productsContects from "../../Contexts/ProductContext";

export default function Toast() {
  const contextData = useContext(productsContects);
  


  return (
    <div>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          className={`${
            contextData.isShowToast ? "show" : ""
          }toast align-items-center  bg-primary text-white fs-6 mb-4 mx-3 `}
        >
          <div className="d-flex" >
            <div className="toast-body">Product is to Box whit Successful</div>
            <button type="button"  className="btn-close me-2 m-auto bg-white ms-3" onClick={()=>{
              contextData.setisShowToast(false)
            }}  ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
