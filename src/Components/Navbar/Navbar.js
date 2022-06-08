import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Deals", link: "/deals" },
    { id: 4, name: "Coupons", link: "/coupons" },
    { id: 5, name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="bg-indigo-200 py-3 md:flex justify-between items-center duration-300 ease-in">
      <div onClick={() => setOpen(!open)} className="h-10 w-10 text-yellow-50 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon />}
      </div>
      <ul className={`md:flex bg-indigo-200 justify-center absolute md:static w-full ${open ? "top-15" : "top-[-160px]"}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
