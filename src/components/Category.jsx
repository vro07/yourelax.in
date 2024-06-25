/* eslint-disable react/prop-types */
// src/components/Category.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductCard from "./ProductCard";

const Category = ({ categoryName, products }) => {
  return (
    <div className="my-8">
      <h1 className="mb-4 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {categoryName}
        </span>{" "}
      </h1>

      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
