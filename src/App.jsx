import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AllProduct from "./pages/AllProduct";

function App() {
  return (
    <>
      <div className="nav-color bg-base-200">
        <nav className="container navbar mx-auto">
          <div className="flex-1">
            <a className=" text-color text-xl">FOOD World</a>
          </div>
          <ul className="flex  text-blue-500 gap-5">
            <Link to="/">Home</Link>
            <Link to="AllProduct">Allproduct</Link>
          </ul> 

          <div className="flex-none gap-8 ">
            <div className="cart-color indicator ml-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div></div>
            <div className="flex-1">
              <a className="btn  normal-case text-xl">Log in</a>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Allproduct" element={<AllProduct/>} />
      </Routes>
    </>
  );
}
export default App;
