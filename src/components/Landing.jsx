/* eslint-disable no-unused-vars */
import React from "react";
import { HeroParallax } from "./HeroParallax";
import { LandingProp } from "../data";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();
  return (
    <div>
      <HeroParallax products={LandingProp} />
      <div className="flex justify-center w-full absolute p-5 my-5 py-3">
        <button
          onClick={() => {
            navigate("/products");
          }}
          className="flex h-12 text-4xl p-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-16 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 py-10"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};
