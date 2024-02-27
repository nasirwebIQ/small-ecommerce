import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "./ProductsData";
import { TbCurrencyTaka } from "react-icons/tb";
import { HiPlusSm } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";
import { VscClose } from "react-icons/vsc";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { DrawerContext } from "../context/DrawerContext";

const findObj = (arr, obj) => {
  return arr.find((o) => o.id === obj.id);
};

function ProdcutDetail() {
  const { id } = useParams();
  const { isOpen, onDrawerClose } = useContext(DrawerContext);
  const [addToCardProduct, setAddToCardProduct] = useState([]);
  // State to store count value
  const [count, setCount] = useState(0);

  const singleProduct = ProductsData.find((p) => p.id === Number(id));

  useEffect(() => {
    const products = localStorage.getItem("addtocard");
    setAddToCardProduct(JSON.parse(products) || []);
  }, []);

  const handleAddToCard = () => {
    let cardProduct = [];
    const prevProduct = findObj(addToCardProduct, singleProduct);

    console.log(prevProduct);

    if (prevProduct?.id === singleProduct.id) {
      cardProduct = [{ ...prevProduct, quantity: prevProduct.quantity + 1 }];
    } else {
      cardProduct = [...addToCardProduct, { ...singleProduct, quantity: 1 }];
    }

    localStorage.setItem("addtocard", JSON.stringify(cardProduct));
    setAddToCardProduct(cardProduct);
  };

  const removeItem = (id) => {
    const tempObj = addToCardProduct.filter((object) => {
      return object.id !== id;
    });
    localStorage.setItem("addtocard", JSON.stringify(tempObj));
    setAddToCardProduct(tempObj);
  };

  console.log(addToCardProduct);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="img-detail">
            <img src={singleProduct.image} alt="somthing" />
          </div>
        </div>
        <div className="col-lg-8">
          <span className="description-detail">
            {singleProduct.discription}
          </span>
          <div className="praces-detail">
            {" "}
            <span className="currency-detail">
              <TbCurrencyTaka />
            </span>
            <span className="price-detail">{singleProduct.price}</span>
          </div>{" "}
          <div className="quantity">
            <span className="quantity-txt">Quantity</span>
            <button className="quantity-btn-decrement">
              <FaMinus />
            </button>
            <span className="count">
              <input type="text" value={1} />
            </span>
            <button className="quantity-btn-increment">
              <HiPlusSm />
            </button>
          </div>
          <div className="cart-btn">
            <button className="buy">Buy Now</button>
            <button onClick={handleAddToCard} className="buy add">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Drawer
        size="320px"
        open={isOpen}
        onClose={onDrawerClose}
        direction="right"
        className="bla bla bla"
      >
        <div className="cart-container">
          {addToCardProduct.map((product, index) => {
            console.log(product);
            return (
              <div className="image-cart">
                <div className="product-quantity">
                  <button className="up-icon">
                    <IoIosArrowUp />
                  </button>
                  <div>
                    {" "}
                    <span>{product.quantity}</span>
                  </div>
                  <button className="down-icon">
                    <IoIosArrowDown />
                  </button>
                </div>
                <div className="img-cart">
                  <img src={product.image} alt="cart-img" />
                </div>

                <div className="discrap">
                  <span>{product.discription}</span>;{" "}
                </div>
                <div className="price">
                  <span className="price-icon">{<TbCurrencyTaka />}</span>
                  <span className="price-cart">{product.price}</span>
                </div>
                <div className="close-icon">
                  {" "}
                  <button
                    className="btn"
                    onClick={() => removeItem(product.id)}
                  >
                    <VscClose />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
}

export default ProdcutDetail;
