/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => (
  <div className="font-standard text-4xl text-center">
    <p>Welcome to the starter</p>
    <Link
      to="/"
      className="text-xl text-red-600 underline decoration-2 decoration-red-600"
    >
      Back to home
    </Link>
  </div>
);

export default Welcome;
