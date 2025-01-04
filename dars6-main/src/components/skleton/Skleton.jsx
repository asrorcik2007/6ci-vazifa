import React from "react";

function Skleton({}) {
  const loading = new Array(10).fill("");

  let loadingItem = loading.map((item, index) => (
    <div key={index} className="max-w-[274px] w-full p-3 bg-white rounded-2xl">
      <div className="max-w-[274px] w-full h-[200px]  bg-[#eeedef] rounded-2xl p-4"></div>
      <div className="py-2 flex flex-col gap-1">
        <div className="h-[27px] w-[200px] bg-[#eeedef] rounded-2xl"></div>
        <div className="h-[27px] w-[220px] bg-[#eeedef] rounded-2xl"></div>
        <div className="h-[27px] w-[200px] bg-[#eeedef] rounded-2xl"></div>
        <div className="h-[27px] w-[100px] bg-[#eeedef] rounded-2xl"></div>
        <div className="h-[27px] bg-[#eeedef] rounded-2xl"></div>
        <div className="h-[27px] w-[230px] bg-[#eeedef] rounded-2xl"></div>
      </div>
      <div className="h-[60px] flex justify-between bg-[#eeedef] rounded-xl p-2">
        <button className="bg-[#eeedef] text-white p-2 rounded-lg text-xl"></button>
        <button className="bg-[#eeedef] text-white p-2 rounded-lg text-xl"></button>
      </div>
    </div>
  ));
  return (
    <div className="w-[1600px] flex flex-wrap justify-center gap-3 mt-[130px]">
      {loadingItem}
    </div>
  );
}

export default Skleton;
