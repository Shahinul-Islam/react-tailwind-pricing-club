import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOptions = [
    { id: 1, name: "Free", price: 0, img: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_960_720.jpg" },
    { id: 2, name: "Regular", price: 9.99, img: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_960_720.jpg" },
    { id: 3, name: "Premium", price: 19.99, img: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_960_720.jpg" },
  ];
  return (
    <div>
      <div className="bg-indigo-300 p-4 mt-8 text-white">
        <h1 className="text-4xl font-mono">Grab this hot deal in this summer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odio distinctio consequatur inventore tempora suscipit reprehenderit esse? Itaque, aut consequatur!</p>
      </div>
      <div className="grid md:grid-cols-3">
        {pricingOptions.map((pricingOption) => (
          <PricingOption key={pricingOption.id} pricingOption={pricingOption}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
