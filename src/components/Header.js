import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { RiRefreshLine } from "react-icons/ri";
import { AiOutlineWifi } from "react-icons/ai";
import { MdTableRestaurant } from "react-icons/md";
import "./Header.css";

function Header() {
  return (
    <div className="header ms-0 d-flex  ">
      <div>
        <h3 style={{ whiteSpace: "nowrap" }} className=" fw-bold mt-3">
          Restro POS
        </h3>
      </div>
      <div className="d-flex mt-3 ipt_grp ">
        <InputGroup
          style={{ width: "450px" }}
          className="mb-3 position-relative border rounded-2 form_head"
        >
          <FormControl
            style={{ backgroundColor: "rgb(230, 230, 230)" }}
            className="form_control"
            placeholder="Search products....."
          />

          <FiSearch
            style={{ marginLeft: "400px", fontSize: "20px" }}
            className="mt-2 position-absolute "
          ></FiSearch>
        </InputGroup>
        <div className="  ms-5">
          <RiRefreshLine className="mb-3 rf_icon"></RiRefreshLine>
        </div>
        <div className=" text-success ">
          <AiOutlineWifi className="wf_icon mb-3"></AiOutlineWifi>
        </div>
        <div className="select_table text-white">
          <MdTableRestaurant className="select"></MdTableRestaurant>
          Select Table
        </div>
      </div>
    </div>
  );
}

export default Header;
