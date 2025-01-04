import React, { useEffect, useState } from "react";
import axios from "axios";
import Person from "../../assets/images/person-standing.svg";
import Skleton from "../skleton/Skleton";
function Header() {
  const [users, setusers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ofset, setofset] = useState(1);
  const page = 10;
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/users", {
        params: {
          limit: ofset * page,
        },
      })
      .then((res) => {
        setusers(res.data.users);
        console.log(users);
      })
      .catch("xato")
      .finally(() => setLoading(false));
  }, [ofset]);
  return (
    <div className="bg-[#ccc] flex flex-col">
      <header className="flex p-6 items-center z-50 justify-between bg-slate-500 fixed right-0 left-0">
        <div className="flex">
          <img
            className="w-[50px] scale-75 hover:scale-100 transition-transform duration-300 ease-in-out"
            src={Person}
            alt=""
          />

          <h1 className="text-[30px] font-semibold text-white">User List</h1>
        </div>
        <input
          className="bg-zinc-800 w-[1000px] text-white outline-none placeholder:text-white p-2 rounded-xl"
          placeholder="Seraching"
          type="text"
        />
        <div className="flex gap-3">
          <button className="bg-blue-400 p-2 rounded-lg text-white text-[20px]">
            Log in
          </button>
          <button className="bg-red-400 p-2 rounded-lg text-white text-[20px]">
            Log out
          </button>
        </div>
      </header>
      <div className="max-w-[1600px] mx-auto">
        {loading ? <Skleton count={page} /> : <></>}
        <div className="flex flex-wrap justify-center gap-3 mt-[130px]">
          {users?.map((user) => (
            <div key={user.id} className="p-3 bg-white rounded-2xl">
              <img
                className="w-full h-[250px] scale-95 hover:scale-100 transition-transform duration-300 ease-in-out  bg-slate-400 rounded-md p-4"
                src={user.image}
                alt=""
              />
              <div className="py-2">
                <h3 className="text-xl">
                  <span className="text-xl font-medium">Name: </span>
                  {user.firstName}
                </h3>
                <h3 className="text-xl">
                  <span className="text-xl font-medium">LastName: </span>
                  {user.lastName}
                </h3>
                <h3 className="text-xl">
                  <span className="text-xl font-medium">Gender: </span>
                  {user.gender}
                </h3>
                <h3 className="text-xl">
                  <span className="text-xl font-medium">Age: </span>
                  {user.age}
                </h3>
                <h3 className="text-xl">
                  <span className="text-xl font-medium">Phone: </span>
                  {user.phone}
                </h3>
                <h3 className="text-xl">
                  <span className="text-xl font-medium">BirthDate: </span>
                  {user.birthDate}
                </h3>
              </div>
              <div className="flex justify-between bg-slate-500 rounded-xl p-2">
                <button className="bg-green-500 text-white p-2 rounded-lg text-xl hover:bg-[#45a049]">
                  Contact
                </button>
                <button className="bg-red-500 text-white p-2 rounded-lg text-xl hover:bg-[#d32f2f]">
                  Profile
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setofset((p) => p + 1)}
          className="bg-slate-500 text-xl text-white py-4 px-[30px] hover:bg-slate-600 flex justify-center text-center m-auto my-[30px] rounded-2xl"
        >
          SeeMore
        </button>
      </div>
    </div>
  );
}

export default Header;
