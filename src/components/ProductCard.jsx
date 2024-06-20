/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/product/" + product.id);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 m-4 max-w-xs cursor-pointer transition-transform transform hover:scale-105"
      onClick={handleClick}
    >
      <img
        className="rounded-t-lg w-full h-48 object-contain"
        src={product.imgLink}
        alt={product.name}
      />
      <h3 className="text-lg font-bold mt-4">{product.name}</h3>
      <p className="text-green-500 font-semibold mt-2">
        Price: ₹{product.priceFrom}{" "}
        {product.priceTo ? `- ₹${product.priceTo}` : ""}
      </p>
    </div>
  );
};

export default ProductCard;
