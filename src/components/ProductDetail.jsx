/* eslint-disable no-unused-vars */
// @ts-nocheck
// src/components/ProductDetail.js
import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

const ProductDetail = () => {
  const { id } = useParams();
  const product = Object.values(data)
    .flat()
    .find((product) => product.id === parseInt(id));
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
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
        <h1 className="mb-4  text-3xl font-extrabold text-gray-900 dark:text-white ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {product.name}
          </span>{" "}
        </h1>
        {/* <h3 className="text-4xl font-bold mb-4">{product.name}</h3> */}
        <p className="text-gray-600 text-lg mb-4">{product.Description}</p>
        <p className="text-green-500 text-2xl font-semibold mb-4">
          Price: ₹{product.priceFrom}{" "}
          {product.priceTo ? `- ₹${product.priceTo}` : ""}
        </p>
        <a
          href={product.link}
          target="_blank"
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
