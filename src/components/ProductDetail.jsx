/* eslint-disable no-unused-vars */
// @ts-nocheck
// src/components/ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

const ProductDetail = () => {
  const { id } = useParams();
  const product = Object.values(data)
    .flat()
    .find((product) => product.id === parseInt(id));

  if (!product) {
    // console.log(id);
    return <div className="text-center mt-8">Product not found.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100">
      <div className="md:w-1/2 h-full flex items-center justify-center p-4">
        <img
          className=" w-full h-auto max-h-full object-contain rounded-lg    "
          src={product.imgLink}
          alt={product.name}
        />
      </div>
      <div className="md:w-1/2 h-full flex flex-col items-start justify-center p-8 bg-white shadow-lg rounded-lg">
        <h3 className="text-4xl font-bold mb-4">{product.name}</h3>
        <p className="text-gray-600 text-lg mb-4">{product.Description}</p>
        <p className="text-green-500 text-2xl font-semibold mb-4">
          Price: ₹{product.priceFrom}{" "}
          {product.priceTo ? `- ₹${product.priceTo}` : ""}
        </p>
        <a
          className="mt-4 inline-block bg-blue-500 text-white rounded-full px-4 py-2 text-lg"
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
