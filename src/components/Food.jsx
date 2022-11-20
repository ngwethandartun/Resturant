import { useState } from "react";
import { data } from "../data/db.js";

const Food = () => {
  const [foods, setFoods] = useState(data);
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <>
      <div className="container m-auto px-4 py-12 ">
        <h1 className="text-orange-600 font-bold text-4xl text-center">
          Top Rated Menu Items
        </h1>
        <div className="flex flex-col  justify-space-between ml-60 mt-7">
          <div>
            <div className="flex justfiy-between flex-wrap text-center">
              <button
                onClick={() => setFoods(data)}
                className="btn btn-outline  btn-primary  mx-8"
              >
                All
              </button>
              <button
                onClick={() => filterType("burger")}
                className="btn btn-outline btn-primary mx-8"
              >
                Burgers
              </button>
              <button
                onClick={() => filterType("pizza")}
                className="btn btn-outline btn-primary mx-8"
              >
                Pizza
              </button>
              <button
                onClick={() => filterType("drink")}
                className="btn btn-outline btn-primary mx-8"
              >
                Drinks
              </button>
              <button
                onClick={() => filterType("chicken")}
                className="btn btn-outline btn-primary mx-8"
              >
                Chicken
              </button>
              <button
                onClick={() => filterType("ice")}
                className="btn btn-outline btn-primary mx-8"
              >
                ice-cream
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center mt-8">
        {foods.map((food) => (
          <div className="card w-96 bg-base-100 shadow-xl  hover:scale-105 duration-300">
            <figure className="max-h-64">
              <img src={food.img} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title truncate">{food.name}</h2>
              <p className="max-h-24 text-clip overflow-hidden">{food.dsc}</p>
              <p>${food.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Food;
