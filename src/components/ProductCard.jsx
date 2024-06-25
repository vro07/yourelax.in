/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/" + product.id);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full max-w-sm bg-white border border-gray-200 hover:rounded-lg transition shadow flex flex-col hover:scale-105 cursor-pointer px-2 pb-2 "
    >
      <img
        className="p-8 rounded-t-lg h-96 object-contain pt-2"
        src={product.imgLink}
        alt={product.name + " image"}
      />

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {product.name}
        </h5>
        <br />
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-gray-900 ">
              ₹{product.priceFrom}
            </span>
            <span className="text-sm font-bold text-gray-300 ">onwards</span>
          </div>
          <a
            href={product.link}
            target="_blank"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Buy Now
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
