import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { SliderData } from "./SliderData";

function Products({ product }) {
  return (
    <>
      <Slider slides={SliderData} />
      <div className="container">
        <div className="row">
          {product.map((prd) => {
            return (
              <div className="col-lg-3">
                <Link key={prd.id} to={`/product/${prd.id}`}>
                  <div className=" card">
                    <img
                      src={prd.image}
                      alt="somthing"
                      className="image-product"
                    />
                    <span className="description">{prd.discription}</span>
                    <div className="praces">
                      {" "}
                      <span className="currency">
                        <TbCurrencyTaka />
                      </span>
                      <span className="price">{prd.price}</span>
                    </div>{" "}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
