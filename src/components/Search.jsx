import React from "react";
import { useState } from "react";
import { data } from "../data/db.js";

function Search() {
  const [searchTerm, setSearchTerm] = useState("data");

  return (
    <div className="container mx-auto mt-6">
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Search here...."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {data.filter((product) => {
        if (searchTerm == "") {
          return product;
        } else if (
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return product;
        }
      }).map((product, key) => {
        return (
          <div className="flex flex-wrap justify-center mt-5 ">
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 ">
              <figure className="max-h-80 ">
                <img src={product.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title truncate">
                  {product.category}
                  {""}
                </h2>
                <p className="max-h-24 text-clip overflow-hidden">
                  {product.dsc}
                </p>
                <p>${product.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Search;
