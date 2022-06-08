import React from "react";

const Pricing = () => {
  const pricingOptions = [
    { id: 1, name: "Free", price: 0 },
    { id: 2, name: "Regular", price: 9.99 },
    { id: 3, name: "Premium", price: 19.99 },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8 text-white">
      <h1 className="text-4xl font-mono">Grab this hot deal in this summer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odio distinctio consequatur inventore tempora suscipit reprehenderit esse? Itaque, aut consequatur!</p>
    </div>
  );
};

export default Pricing;
