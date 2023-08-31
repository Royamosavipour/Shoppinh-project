import React, { useContext } from "react";
import "./productSectionLayout.css";
import productsContects from "../../Contexts/ProductContext";

export default function ProductsSection({ title, info }) {
  const contextData = useContext(productsContects);

  const addToCart = (product) => {
    contextData.setisShowToast(true);
    contextData.setisShowSidebar(true);

    setTimeout(() => {
      contextData.setisShowToast(false);
      // contextData.setisShowSidebar(false);
    }, 3000);

    let isInUserCart = contextData.userCart.some(
      (bagProduct) => bagProduct.title === product.title
    );

    if (!isInUserCart) {
      let newProduct = {
        id: contextData.userCart.lenghth + 1,
        title: product.title,
        price: product.price,
        img: product.img,
        count: 1,
      };
      contextData.setUseCart((prevProduct) => [...prevProduct, newProduct]);
    } else {
      let userCarts = [...contextData.userCart];
      userCarts.some((bagpProduct) => {
        if (product.title === bagpProduct.title) {
          bagpProduct.count += 1;
          return true;
        }
      });
      contextData.setUseCart(userCarts);
      // let countCalculet = userCarts.map((bagproduct) => {
      //   if (bagproduct.title === product.title) {
      //     bagproduct.count += 1;
      //   }
      //   return bagproduct;
      // });
      // contextData.setUseCart(countCalculet);
    }
  };

  return (
    <>
      {contextData.allproducts.map((productSection) => (
        <div className="row justify-content-center mt-5">
          <h3 className="text-center"> {productSection.title} </h3>

          {productSection.info.map((product) => (
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-3">
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img
                    src={product.img}
                    className="w-100 card-img-top"
                    alt=""
                  />
                </div>
                <div class="card-body">
                  <p class="card-text text-center"> {product.title} </p>
                  <p className="price text-center">{product.price} $</p>
                  <div className="text-center">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary"
                      onClick={() => addToCart(product)}
                    >
                      Add to Card
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-outline-primary m-2 text-capitalize"
                    >
                      Mor Info
                    </a>
                  </div>
                </div>
                <p className="text-center mt-2 number">
                  At to stor: {product.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
