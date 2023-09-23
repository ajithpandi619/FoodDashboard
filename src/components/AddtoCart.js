import React from "react";
import "./AddtoCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { MdOutlineRefresh } from "react-icons/md";

import { HiDeviceTablet } from "react-icons/hi";
import Total from "./Total";
function AddtoCart({ cart, total, removeFromCart }) {
  return (
    <>
      <div className="Add_cart overflow-hidden">
        <div className=" icc_pack d-flex align-items-center  ">
          <div className="biplus1">
            <BiPlus className="me-1"></BiPlus>Add Customer
          </div>
          <div className="icc">
            <BiPlus></BiPlus>
          </div>

          <div className="icc">
            <HiDeviceTablet></HiDeviceTablet>
          </div>
          <div className="icc">
            <MdOutlineRefresh></MdOutlineRefresh>
          </div>
        </div>
        <div className="cart_box food_cart">
          {cart.map((item) => (
            <div
              key={item.name}
              className="cart_item fw-bold p-2 d-flex  justify-content-between"
            >
              <span>
                {item.quantity} <span className="ps-2">{item.name}</span>
              </span>
              <span className="me-2">
                ${(item.price * item.quantity).toFixed(2)}
                <span className="ms-2">
                  {" "}
                  <AiFillCloseCircle
                    onClick={() => removeFromCart(item.name)}
                  ></AiFillCloseCircle>
                </span>
              </span>
            </div>
          ))}
        </div>
        <div className="listed">
          <ul>
            <li style={{ marginRight: "180px" }}>Add</li>

            <li className="or_li">Discount</li>
            <li className="or_li">Coupon Code</li>
            <li className="or_li">Note</li>
          </ul>
        </div>
      </div>

      <Total total={total}></Total>
    </>
  );
}

export default AddtoCart;
