import React from "react";

const ShopCard = () => {
  return (
    <div className="w-full h-full flex flex-col items-center border-[1px] rounded-md shadow-sm border-black p-4">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWu7HjXph515m-vSEX7VVLbXaNwkSwgGKvQ&usqp=CAU"
        alt=""
        className="w-full h-[50%]"
      />

      <p className="mt-2 mb-2">Alsactil Tablet</p>
      <p className="mt-2 text-center">
        Instant Relief from acidity, lorem ipsum Heartburn
      </p>
      <p className="mt-2">
        <span className="line-through">$380</span>$361
      </p>

      <button className="border-[1px] border-[#6CAAA8]  p-2 mt-2 w-[200px]">
        ADD TO CART
      </button>
      <button className="bg-[#6CAAA8] p-2 mt-4 w-[200px] text-white">
        BUY NOW
      </button>
    </div>
  );
};

export default ShopCard;
