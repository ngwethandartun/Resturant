import { useState, useEffect } from "react";

const Foodorder = () => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [fastfood, setFastfood] = useState("");
  const [number, setNumber] = useState(null);
  const [mssg, showMssg] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!Number(number)) {
      showMssg("Phone Number should be of number type only");
    } else {
      showMssg("We will contact you soon");
    }
  };
  const handle = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Phone number", number);
    localStorage.setItem("Adress", adress);
     localStorage.setItem("Fast food Name", fastfood);
  };

  return (
    <>
      <h1 className="text-orange-600 font-bold text-4xl text-center mt-10">
        ORDER NOW!
      </h1>
      <div className="container mx-auto  flex  justify-around mt-10 ">
        <div className=" ">
          <img
            className=""
            src="https://img.freepik.com/free-vector/hand-user-ordering-delivery-from-grocery-store-person-buying-food-supermarket-online_74855-15424.jpg?w=740&t=st=1668782578~exp=1668783178~hmac=3a68665dfc05b090a78b5fe918c40692dcfe0fdba4bb360d86ec054ebefa7fa1"
            alt=""
          />
        </div>
        <form className="shadow-lg mb-12 w-96" onSubmit={submit}>
          <div className="">
            <div>
              <div className="ml-5 text-lg">
                <label>Name</label>
              </div>
              <input
                className="input input-sm mt-3 w-64 ml-5"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-10">
              <div className="ml-5 text-lg mt-5">
                <label>Phone number</label>
              </div>
              <input
                className="input input-sm mt-6 w-64 ml-5"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="mb-10">
              <div className="ml-5 text-lg mt-5">
                <label>Adress</label>
              </div>
              <input
                className="input input-sm mt-6 w-64 ml-5"
                placeholder="Adress"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
              />
            </div>
            <div className="mb-10">
              <div className="ml-5 text-lg mt-5">
                <label>Menu</label>
              </div>
              <input
                className="input input-sm mt-6 w-64 ml-5"
                placeholder="Write your menu"
                value={fastfood}
                onChange={(e) => setFastfood(e.target.value)}
              />
            </div>
          </div>

          <button onClick={handle} className="card btn  ml-16 w-40 ">
            Submit
          </button>
          {mssg}
        </form>
      </div>
    </>
  );
};

export default Foodorder;
