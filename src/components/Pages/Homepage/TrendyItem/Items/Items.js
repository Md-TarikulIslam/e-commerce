import React from "react";
import allProducts from "./fakeData";
import "./Items.css";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
const Items = () => {
  return (
    <div className="mb-10">
      <div className="max-w-screen-xl mx-auto  flex flex-col md:flex-row gap-5 ">
        {allProducts.map((product) => {
          return (
            <div className="card mx-auto">
              <div className="flex z-10 items-center justify-between relative top-10 ">
                <p className=" bg-green-500 text-white px-1 rounded-sm">
                  {product.discount}
                </p>
                <p className="text-xl mr-4">
                  <FcLike />
                </p>
              </div>
              <Link to={product.link}>
                <img className="img-size " src={product.front_image} alt="" />
                <img
                  className="img-top img-size"
                  src={product.back_image}
                  alt=""
                />
              </Link>
              <p className="text-lg">{product.name}</p>
              <p className="text-lg text-red-500 font-semibold">
                {product.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
