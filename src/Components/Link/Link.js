import React from "react";

const Link = ({ route }) => {
  const { name, link } = route;
  return (
    <li className="p-1 font-bold cursor-pointer">
      <a href={link}>{name}</a>
    </li>
  );
};

export default Link;
