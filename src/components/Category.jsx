/* eslint-disable react/prop-types */
// src/components/Category.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductCard from "./ProductCard";

const Category = ({ categoryName, products }) => {
  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold text-center mb-6">{categoryName}</h2>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
