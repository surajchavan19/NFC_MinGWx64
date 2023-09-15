import React from "react";
import ShopCard from "@/components/ShopCard";
import Navbar1 from "@/components/Navbar1";

const index = () => {
  return (
    <div className="w-full">
      <Navbar1 />
      <div className="w-full h-48 bg-slate-400 flex justify-center items-center">
        <span className="text-4xl text-white"> Pitta</span>
      </div>

      <div className="w-full flex justify-center">
        <span className="text-slate-500 mt-4 mb-4">
          Showing 1 to 18 of 20 results
        </span>
      </div>

      <div className="flex">
        <div className="w-[30%] p-8">
          <span>Doshas</span>
          <div className="w-full h-[2px] bg-slate-200 mt-2" />
        </div>

        <div className="w-[70%] flex flex-wrap">
          {[...Array(6)].map((_, i) => {
            return (
              <div className="w-72 h-auto m-4">
                <ShopCard />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
