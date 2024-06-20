/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Category from "./Category";

const Home = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      {Object.keys(data).map((categoryName) => (
        <Category
          key={categoryName}
          categoryName={categoryName}
          products={data[categoryName]}
        />
      ))}
    </div>
  );
};

export default Home;
